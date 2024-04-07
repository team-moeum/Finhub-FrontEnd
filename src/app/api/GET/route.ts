import { getToken } from "@/utils/auth_server";
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'http://localhost:9090' : process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  const { path } = await req.json();
  const Tokens = getToken();
  console.log("TOKENS", Tokens);
  const url = `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      Authorization: `Bearer ${Tokens.accessToken}`,
      refreshToken: `${Tokens.refreshToken}`,
    },
    cache: "no-store"
  });

  const res = await data.json();
  /* TOKEN TYPE ERROR */
  if (res.apiStatus) res.status = "FAIL";
  console.log("GET", url, res);

  return NextResponse.json(res);
}
