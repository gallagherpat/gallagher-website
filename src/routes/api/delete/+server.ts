import prisma from "$lib/server/prisma";
import prisma from "$lib/server/prisma";
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const DELETE = (async({ request }) => {
    const body = await request.json();
    const postId = await body.id
    //console.log(articleID);
     async function main(){
        const post = await prisma.post.delete({
            where: {
                id: parseInt(postId),
            }
        })
    }
    main()
    .then(async()=>{
        await prisma.$disconnect()
        //console.log(await prisma.$disconnect())
        //console.log(await prisma.$disconnect())
    })
    .catch(async(e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    return json({"Post": "Deleted"})
})satisfies RequestHandler

