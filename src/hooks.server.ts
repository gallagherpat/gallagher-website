import type { Handle } from "@sveltejs/kit";
import {handleHooks} from "@lucia-auth/sveltekit"
import { auth } from "$lib/server/lucia"
import {sequence} from "@sveltejs/kit/hooks"


export const customHandle: Handle = async ({event, resolve}) =>{
    // const cookies = event.cookies.get("sveltekit_auth_app")
    // console.log("hooks")
    // console.log(cookies);

    // event.locals.user = await {id: event.cookies.get("sveltekit_auth_app_refresh_token")};
    // if(event.url.pathname.startsWith("/guarded")){
    //     if(!event.cookies.get("sveltekit_auth_app")){
    //         throw redirect(303, "/")
    //     }
    // }else if(event.url.pathname.startsWith("/signup")){
    //     if(event.cookies.get("sveltekit_auth_app")){
    //         throw redirect(303, "/guarded")
    //     }
    // }

    const response = await resolve(event);

    return response
}

export const handle: Handle = sequence(handleHooks(auth), customHandle)