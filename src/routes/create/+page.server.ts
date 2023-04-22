import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

interface oData {
    title: string,
    content: string
}

export const actions = {
    default:async ({request}) => {
        const formData = await request.formData();

        const title: string = formData.get('title');
        const content: string = formData.get('content');

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
    }
}