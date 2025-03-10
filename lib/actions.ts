'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    if (!userId || !accessToken || !refreshToken) {
        console.error({ error: "Invalid data" });
    }
    
    const cookie = await cookies();

    cookie.set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });

    cookie.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/',
    });

    cookie.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
}


export async function resetAuthCookies() {
    const cookie = await cookies();
    cookie.set('session_userid', '');
    cookie.set('session_access_token', '');
    cookie.set('session_refresh_token', '');
}


export async function getUserId() {
    const cookie = await cookies();

    const userId = cookie.get('session_userid')?.value

    return userId ? userId : null;
}

export async function getAccessToken() {
    const cookie = await cookies();
    let accessToken = cookie.get('session_access_token')?.value;
    return accessToken;
}