import {fail} from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { string } from 'zod';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	return await {
		user
	};
};

interface oData {
    title: string,
    content: string,
    user_id: string
}

export const actions: Actions = {
    //@ts-ignore
    create:async ({request}) => {
        const formData = await request.formData();

        const title: string =  formData.get('title').toString();
        const content: string = formData.get('content').toString();
        const user_id: string = formData.get('user').toString();
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
            content,
            user_id
        }
        console.log(data);
        async function main() {        
        //@ts-ignore
        const post = await prisma.post.create({data})
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