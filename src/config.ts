export const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const CLIENT_SECRET = process.env.AUTH_KAKAO_CLIENT_SECRET;