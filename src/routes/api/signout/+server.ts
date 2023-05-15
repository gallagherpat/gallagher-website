import { json } from '@sveltejs/kit';
import {auth} from "$lib/server/lucia";

//@ts-ignore
export async function POST({locals}) {
    console.log("click")
    const session = await locals.auth.validate();
    if (!session) return json({success: "fail"})
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    return json({success: true})
}
