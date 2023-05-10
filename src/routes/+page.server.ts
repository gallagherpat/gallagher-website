
import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { deleteAuthenticationCookies } from '$lib/cookies';

export const load: PageServerLoad = (async ({}) =>{
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
})

export const actions:Actions = {
    logOut:async ({request, cookies}) => {
        const formData = await request.formData();
        console.log(formData);
        deleteAuthenticationCookies(cookies);
  }
}


