import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const kakaoCode = searchParams.get('code')
    
    const data = await fetch(`https://api.fin-hub.co.kr/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        },
    })

    const res = await data.json();

    if (res.status === "SUCCESS") {
        const {name, email, accessToken, refreshToken} = res.data;
        const userInfo = { name: name, email: email };

        cookies().set("userInfo", JSON.stringify(userInfo));
        cookies().set("access-token", accessToken, {maxAge: 43200});
        cookies().set("refresh-token", refreshToken, {maxAge: 604800, httpOnly: true})
    }

    return NextResponse.json(res);
}