import { getToken, updateToken as setAccessToken, deleteToken} from "@/utils/auth_server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'http://localhost:9090' : process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  const { path, body } = await req.json();
  const reqToken = {accessToken: "", refreshToken: ""};
  const tokens = getToken();
  reqToken.accessToken = tokens.accessToken ? tokens.accessToken : "";
  reqToken.refreshToken = tokens.refreshToken ? tokens.refreshToken : "";

  const url = `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      Authorization: `Bearer ${reqToken.accessToken}`,
      refreshToken: `${reqToken.refreshToken}`,
    },
    body: JSON.stringify(body)
  });

  console.log(data);
  if (!data.ok) return NextResponse.json({status: "FAIL", errorMsg: "error", data: data});
  
  let res = await data.json();

   /* EXPIRED_TOKEN */
   if (res.data === "EXPIRED_TOKEN") {
    const resUpdateToken = await updateToken(reqToken);
    
    if (resUpdateToken.status === "FAIL") {
      deleteToken();
      return NextResponse.json({ status: "EXPIRED_ALL_TOKEN" });
    }

    cookies().set("access-token", resUpdateToken.data.token, {
      maxAge: 60 * 60 * 24 * 14, // 14 days
      secure: true,
      httpOnly: true,
    });

    const dataRetry = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        Authorization: `Bearer ${getToken().accessToken}`,
        refreshToken: `${getToken().refreshToken}`,
      },
      body: JSON.stringify(body)
    });
  
    res = await dataRetry.json();
  }

  console.log(res);

  return NextResponse.json(res);
}

async function updateToken(reqToken: {accessToken: string, refreshToken: string}) {
  const resUpdateToken = await fetch(`${API_BASE_URL}/api/v1/auth/updateAccessToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        Authorization: `Bearer ${reqToken.accessToken}`,
        refreshToken: `${reqToken.refreshToken}`,
      },
      cache: "no-store",
      credentials: "include"
    });

    const dataUpdateToken = await resUpdateToken.json();
  

    return dataUpdateToken;
}
