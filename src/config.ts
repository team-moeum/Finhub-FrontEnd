export const REST_API_KEY = '8cdab51912aa75e69f1dce7eb88d196c';
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const CLIENT_SECRET = process.env.AUTH_KAKAO_CLIENT_SECRET;