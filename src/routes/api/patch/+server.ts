import prisma from "$lib/prisma.ts";
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const PATCH = (async({ request }) => {
    const body = await request.json();
    const articleID: number = await body.data.id
    console.log(articleID);
     async function main(){
        const article = await prisma.article.update({
            where: {
                id: articleID
            },
            data: {
                title: body.data.newTitle,
                content: body.data.newContent
            }
        })
    }
    main()
    .then(async()=>{
        await prisma.$disconnect()
        console.log(await prisma.$disconnect())
    })
    .catch(async(e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    return json({"Post": "Updated"})
})satisfies RequestHandler