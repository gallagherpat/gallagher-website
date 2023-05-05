import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

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
    const form = await superValidate(event, newUserSchema)
    return{
        form
    }
}

export const actions = {
    default:async(event) =>{
        const form = await superValidate(event, newUserSchema);
        console.log(form);
        
        if(!form.valid) {
            return fail(400, {
                form
            })
        }
        return {
            form
        }
    }
}satisfies Actions