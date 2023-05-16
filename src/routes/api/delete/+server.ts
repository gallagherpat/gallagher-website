import { auth } from "$lib/server/lucia";
import prisma from "$lib/server/prisma";
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import {error} from '@sveltejs/kit'

export const DELETE = (async({ request, locals }) => {
    const user = await locals.auth.validate();
    const body = await request.json();
    const postId = await body.id
    const userIdRec = await body.user;
    if(!userIdRec){
        throw error(400, 'Bad request')
    }
    if(userIdRec === user.userId){
        console.log("success");
        async function main(){
            const post = await prisma.post.delete({
                where: {
                    id: parseInt(postId),
                },
                include: {
                    auth_user: userIdRec
                }
            })
        }
        main()
        .then(async()=>{
            await prisma.$disconnect()
        })
        .catch(async(e)=>{
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
    }
    return json({"Post": "Deleted"})
})satisfies RequestHandler

