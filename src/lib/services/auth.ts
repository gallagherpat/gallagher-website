import type { RequestEvent } from "@sveltejs/kit";

export const authenticateUser = (event: RequestEvent) => {
    const {cookies} = event;
    //console.log(cookies);
    const userToken = cookies.get("sveltekit_auth_app");
    //console.log(userToken);

    if(userToken){
        const user: User = {
            id: userToken,
            email: "test@example.com"
        }
        return user
    }
}