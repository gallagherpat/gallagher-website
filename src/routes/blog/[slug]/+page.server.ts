import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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