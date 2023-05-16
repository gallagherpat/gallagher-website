import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  prisma  from '$lib/server/prisma'
import {auth} from '$lib/server/lucia'

export const load: PageServerLoad =  (async ({ params, locals }) =>{
    const session = await locals.auth.validate();
    const postId: number = await parseInt(params.slug);
    // const id: number = await parseInt(session.userId);
    if(params.slug === 'hello-world'){
        return {
            title: 'Hello world',
            content: 'Welcome to hell'
        }
    }
    console.log(typeof parseInt(params.slug))
    const currentPost = await prisma.post.findUnique({
        where: {
            id: postId
        }
    })
    if(await currentPost === null){
        throw error(404, 'This is not the post you are looking for');
    }
    if(await !session){
        return {
            data: await currentPost,
            isUser: false
        }
    }
    if(await currentPost.user_id === session.userId){
        return {
            data: await currentPost,
            isUser: true
        }
    }else{
        return {
            data: await currentPost,
            isUser: false
        }
    }
});