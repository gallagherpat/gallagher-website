import { PrismaClient, Prisma } from '@prisma/client';
import {fail} from '@sveltejs/kit';

const prisma = new PrismaClient();

interface oData {
    title: string,
    content: string
}

export const actions = {
    create:async ({request}) => {
        const formData = await request.formData();

        const title: string = formData.get('title');
        const content: string = formData.get('content');

        if(title.length < 1 || content.length < 1){
            return fail(400, {
                error: true,
                message: "Please enter data into the forms",
                title,
                content
            })
        }

        let data: oData = {
            title,
            content
        }

        async function main() {        
        const article = await prisma.article.create({data})
        }

        main()
        .then(async () =>{
           await prisma.$disconnect()
        })
        .catch(async (e) =>{
           console.error(e)
           await prisma.$disconnect()
           process.exit(1)
        })
        return {
            success: true
        }
    }
}