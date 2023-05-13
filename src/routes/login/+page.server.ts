import type { Actions, PageServerLoad } from './$types';
import { auth } from "$lib/server/lucia";
import { redirect, fail } from '@sveltejs/kit';

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
};

export const actions: Actions = {
    default:async ({locals, request}) => {
        const form = await request.formData();
        const username = form.get('userName');
        const password = form.get("password");
        if (typeof username !== "string" || typeof password !== "string"){
            return fail(400);
        }
        try{
            const key = await auth.useKey("username", username, password);
            const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
        }catch {
            // invalid credentials
			return fail(400);
        }
    }
}