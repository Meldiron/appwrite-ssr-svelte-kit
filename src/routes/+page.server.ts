import { AppwriteProject, AppwriteService } from '$lib/AppwriteService';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const sessionNames = [
		'a_session_' + AppwriteProject.toLowerCase(),
		'a_session_' + AppwriteProject.toLowerCase() + '_legacy'
	];

	const hash = cookies.get(sessionNames[0]) ?? cookies.get(sessionNames[1]) ?? '';
	AppwriteService.setSession(hash);

	let account;
	try {
		account = await AppwriteService.getAccount();
	} catch (err) {
		account = null;
	}

	return {
		account
	};
}) satisfies PageServerLoad;
