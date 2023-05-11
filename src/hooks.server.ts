import { authenticateUser } from "$lib/services/auth";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) =>{
    // event.locals.user = authenticateUser(event);
    // console.log("Hook");
    // console.log(event.cookies.getAll());
    if(event.url.pathname.startsWith("/guarded")){
        if(!event.cookies.get("sveltekit_auth_app")){
            throw redirect(303, "/")
        }
    }else if(event.url.pathname.startsWith("/signup")){
        if(event.cookies.get("sveltekit_auth_app")){
            throw redirect(303, "/guarded")
        }
    }

    const response = await resolve(event);

    return response
}