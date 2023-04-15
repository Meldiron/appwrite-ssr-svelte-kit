import { fail } from '@sveltejs/kit';
import {
	AppwriteEndpoint,
	AppwriteProject,
	SsrHostname,
	AppwriteHostname
} from '$lib/AppwriteService';
import type { Actions } from './$types';
import * as setCookie from 'set-cookie-parser';

export const actions = {
	default: async ({ fetch, cookies }) => {
		try {
			const response = await fetch(`${AppwriteEndpoint}/account/sessions/anonymous`, {
				method: 'POST',
				headers: {
					'x-appwrite-project': AppwriteProject
				}
			});

			const json = await response.json();

			if (json.code >= 400) {
				return fail(400, { message: json.message });
			}

			const ssrHostname = SsrHostname === 'localhost' ? SsrHostname : '.' + SsrHostname;
			const appwriteHostname =
				AppwriteHostname === 'localhost' ? AppwriteHostname : '.' + AppwriteHostname;

			const cookiesStr = (response.headers.get('set-cookie') ?? '')
				.split(appwriteHostname)
				.join(ssrHostname);

			const cookiesArray = setCookie.splitCookiesString(cookiesStr);
			const cookiesParsed = cookiesArray.map((cookie) => setCookie.parseString(cookie));

			for (const cookie of cookiesParsed) {
				cookies.set(cookie.name, cookie.value, {
					domain: cookie.domain,
					secure: cookie.secure,
					sameSite: cookie.sameSite as any,
					path: cookie.path,
					maxAge: cookie.maxAge,
					httpOnly: cookie.httpOnly,
					expires: cookie.expires
				});
			}

			return json;
		} catch (err: any) {
			return fail(400, { message: err.message });
		}
	}
} satisfies Actions;
