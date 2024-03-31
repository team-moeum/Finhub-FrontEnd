'use server'

import { cookies } from "next/headers";

/** for server component **/
export const getUserInfo = () => {
    const cookieStore = cookies();
    const userInfo: any = cookieStore.get('userInfo');
    if (userInfo)
        return JSON.parse(userInfo?.value); 
    return false;
}

export const getToken = () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access-token')?.value;
    const refreshToken = cookieStore.get('refresh-token')?.value;
    return {accessToken, refreshToken};
}

export const singIn = async () => {
    const Tokens = getToken();

    const data = await fetch('https://api.fin-hub.co.kr/api/v1/auth/autoLogin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({
            accessToken: Tokens.accessToken,
            refreshToken: Tokens.refreshToken,
        }),
    });

    const res = await data.json();

    if (res.status === "SUCCESS") {
        console.log("ROUTE123123", res);
        const {name, email, accessToken, refreshToken} = res.data;
        const userInfo = { name: name, email: email };

        cookies().set("userInfo", JSON.stringify(userInfo));
        cookies().set("test", "TEST");
        cookies().set("access-token", accessToken, {maxAge: 43200});
        cookies().set("refresh-token", refreshToken, {maxAge: 604800, httpOnly: true})
    }
}