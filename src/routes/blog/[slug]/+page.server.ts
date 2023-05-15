import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  prisma  from '$lib/server/prisma'
import {auth} from '$lib/server/lucia'

export const load: PageServerLoad =  (async ({ params, locals }) =>{
    const session = await locals.auth.validate();
    if(params.slug === 'hello-world'){
        return {
            title: 'Hello world',
            content: 'Welcome to hell'
        }
    }
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.slug)
        }
    })
    if(await post === null){
        throw error(404, 'This is not the post you are looking for');
    }
    if(await !session){
        return{
            data: post,
            isUser: false
        }
    }
    if(await post.user_id === session.userId){
        return{
            data: post,
            isUser: true
        }
    }
});