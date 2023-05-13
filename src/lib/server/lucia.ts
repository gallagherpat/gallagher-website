import lucia from "lucia-auth";
// import prismaAdapter from "@lucia-auth/adapter-prisma"
import { sveltekit } from "lucia-auth/middleware";
import {dev} from "$app/environment"
import prisma from "@lucia-auth/adapter-prisma";
// import {client} from './prisma'
import { PrismaClient } from "@prisma/client";

export const auth = lucia({
    //@ts-ignore
    adapter: prisma(new PrismaClient()),
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    // transformDatabaseUser: (userData) => {
    //     return {
    //         userId: userData.id,
    //         username: userData.username,
    //         email: userData.email
    //     }
    // }
})


export type Auth = typeof auth

