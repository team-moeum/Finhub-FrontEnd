import { getToken } from "@/utils/auth_server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'http://localhost:9090' : process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access-token')?.value;
  const refreshToken = cookieStore.get('refresh-token')?.value;
  const { path } = await req.json();
  const Tokens = getToken();
  console.log("TOKENS", Tokens);
  console.log("COOKIE", cookies);
  const url = `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      Authorization: `Bearer ${accessToken}`,
      refreshToken: `${refreshToken}`,
    },
    cache: "no-store"
  });

  const res = await data.json();
  console.log("GET", url, res);
  return NextResponse.json(res);
}
