import prisma from "$lib/prisma";
import {redirect} from '@sveltejs/kit';
import { hashSync } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { validate } from '$lib/services/validateEmail'
import { setAuthenticationCookies } from '$lib/cookies';
import { fail } from "@sveltejs/kit";

export const user = (data, cookies) => {
    const uuid = randomUUID();
    const refreshToken = String(randomUUID());
    const userPass = hashSync(data.password, 14);
    let emailCheck = validate(data.email);

    if(!emailCheck){
        //console.log("email is not in use")
        createUser();
        setAuthenticationCookies(cookies, uuid);
        throw redirect(302, "/");
    }else{
        return fail(400, {
            error: true,
            message: "User email is already in use"
        })
    }
    
    async function createUser() {
        const user = await prisma.user.create({
            data: {            
                userName: data.userName,
                email: data.email,
                password: userPass,
                uuid: uuid,
                refreshToken: refreshToken 
            }
        })
        return user
    }
}