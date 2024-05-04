"use client";

import { useResetRecoilState } from "recoil";

import { fetchApi } from "./fetchApi";
import { ApiResponse } from "@/api/type";
import { userState } from "@/states/client/atoms/user";
import { deleteToken } from "@/utils/auth_server";

const loginWithKakao = async (kakaoCode: string | null) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    use: "auth",
    path: `/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}&origin=${process.env.NEXT_PUBLIC_MODE}`
  });

  return response;
};

/* 수정 필요 */
const autoLogin = async () => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: '/api/v1/auth/autoLogin',
    body: {token: "fcm"},
  });

  return response;
};

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
  autoLogin,
  useLogout,
};
