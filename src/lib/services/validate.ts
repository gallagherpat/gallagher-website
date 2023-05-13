import prisma from "$lib/server/prisma";

export const validateEmail = async (data:string) =>{
    console.log(data);
    const user = await prisma.authUser.findUnique({
        where: {
            email: data
        }
    })

    if(user){
        return false
    } 
    return true
}

export const validateUser = async (data:string) => {
    console.log(data);
    const user = await prisma.authUser.findUnique({
        where: {
            username: data
        }
    })

    if(user){
        return false
    } 
    return true
}