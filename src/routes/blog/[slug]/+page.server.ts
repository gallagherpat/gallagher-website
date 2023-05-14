import prisma from "$lib/server/prisma";

import type { Actions, PageServerLoad } from "./$types";

export const load = (async({params, locals}) =>{
    const { user } = await locals.auth.validateUser();
    console.log(user);
    const data = await params.slug;
    
    async function main(){
        const article = await prisma.post.findUnique({
            where: {
                id: parseInt(data)
            }
        })
        return article
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
    const articleCreator = await main();
    if(user === null){
        return {
            data: await main(),
            user: false
        }
    }
    if(user.userId === articleCreator.user_id){
        console.log("Is user")
        return {
            data: await main(),
            user: true
        }
    }
})satisfies PageServerLoad