import  prisma  from '$lib/server/prisma';

// /**
//  * Get user by uuid 
//  * 
//  * @param uuid 
//  * @returns 
//  */
// export const findByUuid = async (uuid: string) => {
//     return await prisma.user.findUnique({
//         where: {
//             uuid: uuid,
//         },
//         select: {
//             email: true,
//         }
//     })
// }

export const findByUserName = async (userName: string) => {
    return await prisma.user.findUnique({
        where: {
            username: userName
        }
    })
}

/**
 * Get user by refreshtoken
 * 
 * @param refreshTokenc 
 * @returns 
 */
export const findByRefreshToken = async (refreshToken:string) => {
    console.log(refreshToken);
    // return await prisma.user.findUnique({
    //     where: {
    //         refreshToken: refreshToken
    //     },
    //     select: {
    //         email: true,
    //     }
    // })
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