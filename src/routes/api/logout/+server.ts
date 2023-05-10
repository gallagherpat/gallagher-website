import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from './$types';

export const POST = (async ({ cookies }) => {
    console.log(cookies.getAll());
    console.log("Log out");
    cookies.delete('sveltekit_auth_app');
    cookies.delete('sveltekit_auth_app_refresh_token');
    console.log(cookies.getAll())

	throw redirect(303, "/")
})satisfies RequestHandler