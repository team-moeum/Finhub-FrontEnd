import { getToken } from "@/utils/auth_server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { path, body } = await req.json();
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      Authorization: `Bearer ${getToken().accessToken}`,
      refreshToken: `${getToken().refreshToken}`,
    },
    body: `${body}`
  });

  const res = await data.json();

  return NextResponse.json(res);
}
