import  prisma  from '$lib/prisma';

/**
 * Get user by uuid 
 * 
 * @param uuid 
 * @returns 
 */
export const findByUuid = async (uuid: string) => {
    return await prisma.user.findUnique({
        where: {
            uuid: uuid,
        },
        select: {
            email: true,
        }
    })
}

export const findByUserName =async (userName: string) => {
    return await prisma.user.findUnique({
        where: {
            userName: userName
        }
    })
}

/**
 * Get user by email
 * 
 * @param email 
 * @returns 
 */
export const findByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email: email }})
}