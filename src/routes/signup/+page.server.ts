import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import {user} from '$lib/services/user.model'



const newUserSchema = z.object({
    userName: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(4),
    confirm: z.string().min(4)
}).superRefine(({confirm, password}, ctx) =>{
    if(confirm !== password){
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        })
    }
})

export const load = async (event) => {
    const form = await superValidate(event, newUserSchema);
    //@ts-ignore
    const user = event.locals.user;

    console.log(event.cookies.getAll());

    if(user){
        throw redirect(302, '/guarded');
    }
    return{
        form
    }
}

export const actions = {
    default:async({request, cookies}) =>{
        const form = await superValidate(request, newUserSchema);
        console.log(form);
        
        if(!form.valid) {
            return fail(400, {
                form
            })
        }

        user(form.data, cookies);

        return {
            form
        }
    }
}satisfies Actions