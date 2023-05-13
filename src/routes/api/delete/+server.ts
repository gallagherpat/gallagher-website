import prisma from "$lib/server/prisma";
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const DELETE = (async({ request }) => {
    const body = await request.json();
    const articleID = await body.id
    //console.log(articleID);
     async function main(){
        const article = await prisma.article.delete({
            where: {
                id: parseInt(articleID),
            }
        })
    }
    main()
    .then(async()=>{
        await prisma.$disconnect()
        //console.log(await prisma.$disconnect())
    })
    .catch(async(e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    return json({"Post": "Deleted"})
})satisfies RequestHandler

