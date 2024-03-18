import { getToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const Tokens = getToken();
    console.log("TOKENS", Tokens);

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

        cookies().set("test", "TEST");
        cookies().set("userInfo", JSON.stringify(userInfo));
        cookies().set("access-token", accessToken, {maxAge: 43200});
        cookies().set("refresh-token", refreshToken, {maxAge: 604800, httpOnly: true})
    }

    return NextResponse.json(res);
}