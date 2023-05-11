import prisma from "$lib/prisma";
import { hashSync } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { setAuthenticationCookies } from '$lib/cookies';
import { redirect } from "@sveltejs/kit";

export const user = async (data, cookies) => {

    const uuid = randomUUID();
    const refreshToken = String(randomUUID());
    const userPass = hashSync(data.password, 14);
    setAuthenticationCookies(cookies, uuid);
    console.log(data);

    async function createUser() {
        try{
            const user = await prisma.user.create({
                data: {            
                    userName: data.userName,
                    email: data.email,
                    password: userPass,
                    uuid: uuid,
                    refreshToken: refreshToken 
                }
            })
        }catch{
            console.error("error");
            return {
                status: 400,
                body: "An error occured while registering a new user"
            }
        }
  

    }

    createUser();
        

    // if(await validate(data.email)){
    //     console.log("email is not in use")
     
    // }else{
    //     console.log("Email already in use")
    //     return fail(400, {
    //         error: true,
    //         message: "User email is already in use"
    //     })
    // }
    

}