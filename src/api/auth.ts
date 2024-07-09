import { ApiResponse } from "@/api/type";
import { get } from "./client";
import { deleteToken, setAccessToken, setToken } from "@/utils/authToken";

const loginWithKakao = async (kakaoCode: string | null) => {
  const response: ApiResponse = await get(
    `/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}&origin=${process.env.NEXT_PUBLIC_MODE}`
  );

  setToken({
    accessToken: response.data.token.accessToken,
    refreshToken: response.data.token.refreshToken,
  });

  return response;
};

const refreshAccessToken = async () => {
  const response: ApiResponse = await get(
    `/api/v1/auth/updateAccessToken`
  );

  if (response.status === "FAIL") {
    return deleteToken();
  }

  setAccessToken(response.data.token);
}

export const authAPI = {
  loginWithKakao,
  refreshAccessToken
};