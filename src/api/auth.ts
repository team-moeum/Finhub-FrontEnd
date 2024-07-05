"use client";

import { useResetRecoilState } from "recoil";
import { ApiResponse } from "@/api/type";
import { userState } from "@/states/client/atoms/user";
import { get, post } from "./client";
import { deleteToken, setToken } from "@/utils/authToken";

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

/* 수정 필요 */
// const autoLogin = async () => {
//   const response: ApiResponse = await post("/api/v1/auth/autoLogin", {
//     token: "fcm",
//   });

//   return response;
// };

//await fetch("/api/auth/logout", { method: "GET" });
const useLogout = () => {
  const resetUserInfo = useResetRecoilState(userState);

  return () => {
    deleteToken();
    resetUserInfo();
  };
};

export const authAPI = {
  loginWithKakao,
  useLogout,
};
