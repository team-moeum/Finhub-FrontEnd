import { getToken } from "@/utils/auth_server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const Tokens = getToken();
  console.log("autoLogin: ", Tokens);
  
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/autoLogin`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      Authorization: `Bearer ${Tokens.accessToken ? Tokens.accessToken: ""}`,
      refreshToken: `${Tokens.refreshToken ? Tokens.refreshToken : ""}`,
    },
    cache: "no-store"
  });

  const res = await data.json();

  if (res.status === "SUCCESS") {
    const { accessToken, refreshToken } = res.data.token;
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
