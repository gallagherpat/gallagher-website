// import type { Actions } from './$types';
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

// export const actions = {
//     addingData:async ({request}) => {
//         const formData = await request.formData();
//         console.log(formData);
//         return {
//             success: true
//         }
//     },
//     modalInput:async ({request}) => {
//         const formData = await request.formData
//         console.log(formData)
//         return {
//             success: true
//         }
//     }
// }satisfies Actions;

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