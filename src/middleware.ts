import { NextRequest, NextResponse } from 'next/server'
import { getToken } from './utils/auth_server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? 'http://localhost:9090' : process.env.NEXT_PUBLIC_BASE_URL;

export async function middleware(request: NextRequest) {

  console.log("Middleware",getToken());

  const tokens = getToken();
  function autoLogin() {
    fetch(`${API_BASE_URL}/api/v1/auth/autoLogin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
        Authorization: `Bearer ${tokens.accessToken}`,
        refreshToken: `${tokens.refreshToken}`,
      },
      cache: "no-store",
      credentials: "include"
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("Auto Login: ", data);
    });
  }

  autoLogin();

  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: ['/'],
}