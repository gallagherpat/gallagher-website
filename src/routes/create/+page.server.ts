import prisma from '$lib/server/prisma';
import type {Actions} from './$types'
import {auth} from '$lib/server/lucia';
import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// interface data{
//     title: string,
//     content: string,
//     auth_user: {
//         user_id: string
//     }
// }

export const load: PageServerLoad =async ({locals}) => {
    const session = await locals.auth.validate();
    if(session === null){
        throw redirect(302, '/')
    }
    return {
        data: session
    }
}

export const actions: Actions = {
    default:async({locals, request}) =>{
        const {title, content, auth_user} = Object.fromEntries(await request.formData()) as {title: string, content: string, auth_user: string};
        const user = await locals.auth.validate();
        if(!user){
            return fail(400)
        }
        let data = {
            title: title,
            content: content,
            auth_user: {
                user_id: auth_user
            }
        }
        console.log(data);
        //@ts-ignore
        const newPost = prisma.post.create({
            data: {
                title,
                content,
                user_id: auth_user
            },
            include:{
                auth_user: true
            }
        })
        return newPost
    }
}