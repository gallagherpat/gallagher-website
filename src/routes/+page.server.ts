import { type Actions, fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
	const posts = await prisma.post.findMany();
	return{
		data: await posts
	}
}
