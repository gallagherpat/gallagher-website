import type { LayoutServerLoad } from "./$types";
import { findByRefreshToken } from "$lib/services/users";

export const load:LayoutServerLoad = async (event) =>{
    // const user = await event.locals.user;
    // console.log(user.id);
    // const validUser = findByRefreshToken(user.id);
    // return {
    //     data: validUser
    // }
}
