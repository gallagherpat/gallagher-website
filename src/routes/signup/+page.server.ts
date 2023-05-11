import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { z } from 'zod';
import { superValidate, setError } from 'sveltekit-superforms/server';
import {user} from '$lib/services/user.model'
import { validateEmail, validateUser } from '$lib/services/validate'


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

    //console.log(event.cookies.getAll());

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
        const isUniqueEmail = await validateEmail(form.data.email);
        const isUniqueUser = await validateUser(form.data.userName);

        
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
            user(form.data, cookies);
        }

        if(cookies.get("sveltekit_auth_app")){
            throw redirect(300, "/guarded")
        }

        return {
            form
        }
    }
}satisfies Actions