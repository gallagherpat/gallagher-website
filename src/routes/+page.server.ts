import { type Actions, fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import { marked } from "marked";

interface posts{
	title: string,
	content: string
}

export const load: PageServerLoad = async () => {
	const posts = await prisma.post.findMany();
	let userArray = [];
	for(let i = 0; i < posts.length; i++){
		// console.log(posts[i].user_id);
		const user = await prisma.authUser.findUnique({
			where: {
				id: posts[i].user_id,
			}
		})
		userArray.push(user.username);
		console.log(userArray);
	}

	// let parsedPosts:posts;
	// console.log("For each")
	//  posts.forEach(post => parsedPosts.title = marked.parse(post.title));
	//  posts.forEach(post => parsedPosts.content = marked.parse(post.content));
	// console.log("This is the title")
	// const parsedTitle = await marked.parse(title);
	// const parsedContent = await marked.parse(content);
	return{
		data: await posts,
		users: await userArray,
	}
}
