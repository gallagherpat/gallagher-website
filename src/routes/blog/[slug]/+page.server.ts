import prisma from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load = (async({params}) =>{
    const data = await params.slug;
    
    async function main(){
        const post = await prisma.post.findUnique({
            where: {
                id: parseInt(data)
            }
        })
        return post
    }
    main()
    .then(async() =>{
        await prisma.$disconnect()
    })
    .catch(async (e) =>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    const post = await main();
    if(post === null){
        throw redirect(308, "/")
    }
    return {
        data: await main()
    }
})satisfies PageServerLoad