import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  prisma  from '$lib/server/prisma'

export const load: PageServerLoad =  (async ({ params }) =>{
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
    return{
        data: post
    }
});