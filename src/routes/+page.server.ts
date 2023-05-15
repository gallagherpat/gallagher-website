import { type Actions, fail} from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
	const posts = prisma.post.findMany()
	return {
		data: posts
	}
}

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
	}
};