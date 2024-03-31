import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getToken } from './utils/auth';

export async function middleware(request: NextRequest) {

  console.log("Middleware",getToken());

  function autoLogin() {
    fetch(`${request.url}/api/auth/autoLogin`, { method: 'GET' })
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