import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { z } from 'zod';
import { superValidate, setError, message } from 'sveltekit-superforms/server';
import { validateEmail, validateUser } from '$lib/services/validate'
import {auth} from "$lib/server/lucia"

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

//@ts-ignore
export const load: PageServerLoad = async ({event, locals}) => {
    const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");

    const form = await superValidate(event, newUserSchema);
    
    return{
        form
    }
}

export const actions: Actions = {
    default:async({request}) =>{
        const form = await superValidate(request, newUserSchema);
        const username = await form.data.userName;
        const email = await form.data.email;
        const password = await form.data.password;
        const isUniqueUser =  await validateUser(username);
        const isUniqueEmail = await validateEmail(email);

        if(! await isUniqueEmail){
            return setError(form, 'email', 'E-mail already exists.');
        }

        if(! await isUniqueUser){
            console.log(form);
            return setError(form, 'userName', 'User name already exists.');
        }
        
        if(!form.valid) {
            return fail(400, {
                form
            })
        }

        if(form.valid && await isUniqueUser){
            console.log("the user is valid")
            try {
                const user = await auth.createUser({
                    primaryKey: {
                        providerId: "username",
                        providerUserId: username,
                        password,
                    },
                    attributes: {
                        username: username,
                        email: email,
                    },
                });
            }catch(err){
                console.error(err);
                return setError(form, "userName", "something went wrong")
            }
        }
        throw redirect(302, '/');
    }
}