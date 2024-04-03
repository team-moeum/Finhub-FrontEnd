import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kakaoCode = searchParams.get("code");

  const data = await fetch(
    `https://api.fin-hub.co.kr/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      },
    }
  );

  const res = await data.json();
  const { accessToken, refreshToken } = res.data;

  cookies().set("access-token", accessToken, {
    maxAge: 60 * 60 * 3, // 3 hours
    secure: true,
    httpOnly: true,
  });
  cookies().set("refresh-token", refreshToken, {
    maxAge: 60 * 60 * 24 * 14, // 14 days
    secure: true,
    httpOnly: true,
  });

  return NextResponse.json(res);
}
