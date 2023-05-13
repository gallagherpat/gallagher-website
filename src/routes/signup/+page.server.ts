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

export const load = async (event) => {
    // const session = await locals.validate();
    // if(session){
    //     throw redirect(302, "/");
    // }
    const form = await superValidate(event, newUserSchema);
    

    //console.log(event.cookies.getAll());
    return{
        form
    }
}

export const actions = {
    default:async({request}) =>{
        const form = await superValidate(request, newUserSchema);
        const username = await form.data.userName.toString();
        const email = await form.data.email.toString();
        const password = await form.data.password.toString();
        const isUniqueUser =  await validateUser(username);
        const isUniqueEmail = await validateEmail(email);
        console.log(isUniqueUser);

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

        if(isUniqueEmail){
            console.log("it is a unique email")
        }

        if(form.valid && await isUniqueEmail && await isUniqueUser){
            console.log("the user is valid")
            try {
                const user = await auth.createUser({
                    primaryKey: {
                        providerId: "email",
                        providerUserId: email,
                        password: password,
                    },
                    attributes: {
                        username: username,
                        email: email,
                    },
                })
            }catch(err){
                console.error(err);
                return setError(form, "userName", "something went wrong")
            }
        }
        throw redirect(302, '/login');
    }
}satisfies Actions