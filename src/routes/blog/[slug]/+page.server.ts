import prisma from "$lib/prisma.ts";
import type { PageServerLoad } from "./$types";

export const actions = {
    delete:async ({request}) => {
        const data = await request.formData();
        const articleID: string = data.get('id');
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
            console.log(await prisma.$disconnect())
        })
        .catch(async(e)=>{
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
    }
}


export const load = (async({params}) =>{
    const data = await params.slug;
    
    async function main(){
        const article = await prisma.article.findUnique({
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

    return {
        data: await main()
    }
})satisfies PageServerLoad