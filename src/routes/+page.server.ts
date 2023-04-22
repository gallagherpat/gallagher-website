import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

const prisma = new PrismaClient();



export const load = (async ({}) =>{
    async function main() {
    const articles = await prisma.article.findMany()
        return articles
      }
      main()
      .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })


      return {
        data: await main()
      }
})satisfies PageServerLoad;


