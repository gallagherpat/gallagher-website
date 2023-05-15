// routes/+page.server.ts
import type { PageServerLoad } from "./$types";
import { type Actions, fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	return await {
		user
	};
};

