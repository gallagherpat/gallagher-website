import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { compareSync } from 'bcryptjs';
import { setAuthenticationCookies } from '$lib/cookies';
import { findByUserName } from '$lib/services/users';

export const actions: Actions = {
    default:async ({cookies, request, locals}) => {
        const data = await request.formData();
        const userName = data.get('userName');
        const password = data.get("password");
 

        const user = await findByUserName(String(userName));

        if(!compareSync(String(password), String(user?.password))){
            return fail(400, {
                error: true,
                message: password
            })
        }
        if(user){
            locals.user = {
                id: user.uuid,
                email: user.email,
                user: user.userName
            }
            setAuthenticationCookies(cookies, user.uuid);
        }
        throw redirect(302, '/guarded');
    }
}