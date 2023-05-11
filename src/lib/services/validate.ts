import prisma from "$lib/prisma";

export const validateEmail = async (data) =>{
    console.log("Validate email")
    let emailInput = data
    console.log(emailInput);
    const user = await prisma.user.findUnique({
        where: {
            email: emailInput
        }
    })

    if(user){
        return false
    } 
    return true
}

export const validateUser = async (data) => {
    console.log("validate user");
    let userInput = data;
    const user = await prisma.user.findUnique({
        where: {
            userName: userInput
        }
    })

    if(user){
        return false
    } 
    return true
}