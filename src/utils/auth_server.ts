'use server'

import { cookies } from "next/headers";

export const getToken = () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access-token')?.value;
    const refreshToken = cookieStore.get('refresh-token')?.value;
    return {accessToken, refreshToken};
}