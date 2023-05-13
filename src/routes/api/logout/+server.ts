import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from './$types';

export const POST = (async ({ cookies }) => {
    console.log("Click")
    cookies.delete('sveltekit_auth_app');
    cookies.delete('sveltekit_auth_app_refresh_token');

	throw redirect(303, "/")
})satisfies RequestHandler