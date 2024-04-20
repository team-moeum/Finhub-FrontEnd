import { getToken } from "@/utils/auth_server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'http://localhost:9090' : process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  const param = await req.json();
  const reqToken = {accessToken: "", refreshToken: ""};
  
  if (param.token) {
    reqToken.accessToken = param.token.accessToken ? param.token.accessToken : "";
    reqToken.refreshToken = param.token.refreshToken ? param.token.refreshToken : "";
  } else {
    const tokens = getToken();
    reqToken.accessToken = tokens.accessToken ? tokens.accessToken : "";
    reqToken.refreshToken = tokens.refreshToken ? tokens.refreshToken : "";
  }

  const url = `${API_BASE_URL}${param.path.startsWith("/") ? param.path : `/${param.path}`}`;
  const data = await fetch(url, {
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


  if (!data.ok) return NextResponse.json({status: "FAIL", errorMsg: "500 Server Error"});
  
  let res = await data.json();
  

  /* auth */
  if (param.use === "auth") {
    if (res.status === "SUCCESS") {
      const { accessToken, refreshToken } = res.data.token;
      cookies().set("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 14, // 14 days
        secure: true,
        httpOnly: true,
      });
      cookies().set("refresh-token", refreshToken, {
        maxAge: 60 * 60 * 24 * 14, // 14 days
        secure: true,
        httpOnly: true,
      });
    }
  }


  /* EXPIRED_TOKEN */
  if (res.data === "EXPIRED_TOKEN") {
    const resUpdateToken = await updateToken(reqToken);
    
    if (resUpdateToken.status === "FAIL") {
      if (param.ssr) return NextResponse.json({ status: "EXPIRED_ALL_TOKEN" });
      /* csr */
      deleteToken();
      return NextResponse.json({ status: "EXPIRED_ALL_TOKEN" });
    }

    const updateAccessToken = resUpdateToken.data.token;
    
    if (param.ssr) return NextResponse.json({ status: "EXPIRED_TOKEN", token: updateAccessToken});

    /* csr */
    cookies().set("access-token", updateAccessToken, {
      maxAge: 60 * 60 * 24 * 14, // 14 days
      secure: true,
      httpOnly: true,
    });

    const dataRetry = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        Authorization: `Bearer ${getToken().accessToken}`,
        refreshToken: `${getToken().refreshToken}`,
      },
      cache: "no-store",
      credentials: "include"
    });
  
    res = await dataRetry.json();
  }

  /* TOKEN TYPE ERROR */
  if (res.apiStatus === "FAIL") res.status = "FAIL";
  console.log("GET", url, res);

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

function deleteToken() {
  cookies().delete("access-token");
  cookies().delete("refresh-token");
}