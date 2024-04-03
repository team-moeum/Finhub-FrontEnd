import { getToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const Tokens = getToken();
  console.log("TOKENS", Tokens);

  const data = await fetch("https://api.fin-hub.co.kr/api/v1/auth/autoLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify({
      accessToken: Tokens.accessToken,
      refreshToken: Tokens.refreshToken,
    }),
  });

  const res = await data.json();

  if (res.status === "SUCCESS") {
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
  }

  return NextResponse.json(res);
}
