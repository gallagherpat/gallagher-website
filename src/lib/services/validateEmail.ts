import prisma from "$lib/prisma";

export const validate = (data) =>{

    let email = data.email;

    const uniqueEmail = prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(uniqueEmail){
        return true
    } 
    return false
}