![Almost Cover](static/cover.png)

# Almost SSR - Svelte Kit

> Demo application with authorized server-side and client-side rendering.

## 💭 So How Does It Work?

Appwrite uses 1st party secure cookies for authorization. For legacy reasons, there are two such cookies. They are both very similar, but one's name ends with `_legacy` and is configured a tiny bit differently. It's also possible to use a fallback cookie, but that is not secure for production, and we will not be using that.

To ensure server-side rendering works, we need to set those cookies on our SSR server hostname instead of the Appwrite hostname. Let's say our Appwrite instance is on `cloud.appwrite.io`, and our app is on `myapp.com`. SSR server on domain `myapp.com` won't receive `appwrite.io` cookies. This is expected behavior, as browsers keep 1st party cookies securely scoped to specific domains.

To set those cookies on the SSR server, we need a special API endpoint in our SSR server. This endpoint will send a request to create a session, proxying email/password or other credentials. This endpoint next parses the response `set-cookie` header, replaces domain configuration on the cookies, and set's it's own `set-cookie` on the response to the client.

When a client calls this endpoint, the cookie will now be set on the SSR server hostname instead of the Appwrite hostname.

This makes server-side rendering work, but now client-side rendering is broken. Since `set-cookie` coming to the browser only includes a cookie for the SSR server, talking to the Appwrite server directly won't have a proper cookie - there is no auth cookie on the Appwrite hostname. To overcome this problem, we ensure the Appwrite hostname is a subdomain of the SSR hostname. For example, if our SSR server runs on `myapp.com`, Appwrite needs a custom domain configured on `appwrite.myapp.com`. With this setup, all requests to the Appwrite server will include auth cookies, and the user will be properly authorized. This is possible thanks to Appwrite prefixing the cookie domain with `.`, meaning all subdomains can also access the cookie.

## 🧰 Tech Stack

- [Appwrite](https://appwrite.io/)
- [Svelte Kit](https://kit.svelte.dev/)
- [Pink Design](https://pink.appwrite.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Setup Server

1. Setup Appwrite server
2. Create project `almostSsr`

## 👀 Setup Client

1. Install libarries `npm install`
2. Update `AppwriteEndpoint` in `src/lib/AppwriteService.ts`
3. Start server `npm run dev`

## 🚀 Deployment

1. Deploy the frontend on your production domain. For example, `myapp.com`.
2. Add the frontend domain as a trusted platform in your Appwrite project.
3. Add a custom domain to your Appwrite project, which is a subdomain of your frontend. For example, `appwrite.myapp.com`.
4. Update `SsrHostname` and `AppwriteHostname` in `src/lib/AppwriteService.ts` with proper domains.

## 🤝 Contributing

To contribute to frontend, make sure to use the [Pink Design](https://pink.appwrite.io/) design system. Ensure both dark and light theme work properly, as well as responsivity on mobile, tablet and desktop.

When contributing with static files, ensure all images are in WEBP or SVG format.

## 🖼️ Screenshots

![Screenshot](docs/screenshot1.png)
![Screenshot](docs/screenshot2.png)
![Screenshot](docs/screenshot3.png)

## 🤖 Auto-generated documentation

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
