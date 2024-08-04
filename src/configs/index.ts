export const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
export const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;
export const KAKAO_CLIENT_SECRET = process.env.AUTH_KAKAO_CLIENT_SECRET;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile`;

export const APPLE_CLIENT_ID = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
export const APPLE_REDIRECT_URI = process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI;
export const APPLE_AUTH_URL = `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${APPLE_CLIENT_ID}&redirect_uri=${APPLE_REDIRECT_URI}&scope=name%20email&response_mode=form_post`;
