import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login/oauth2/callback/google?code=${code}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || ""
      }
    }
  );

  const res = await data.json();
  const { accessToken, refreshToken } = res.data.token;

  cookies().set("access-token", accessToken, {
    maxAge: 60 * 60 * 24 * 14, // 14 days
    secure: true,
    httpOnly: true
  });
  cookies().set("refresh-token", refreshToken, {
    maxAge: 60 * 60 * 24 * 14, // 14 days
    secure: true,
    httpOnly: true
  });

  return NextResponse.json(res);
}
