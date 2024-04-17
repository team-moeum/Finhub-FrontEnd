"use client";

import { useRouter } from "next/navigation";
import { useResetRecoilState } from "recoil";

import { fetchApi } from "./fetchApi";
import { ApiResponse } from "@/api/type";
import { removeClientInfo } from "@/utils/auth_client";

const loginWithKakao = async (kakaoCode: string | null) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    use: "auth",
    path: `/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}`
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

const useLogout = async () => {
  await fetch("/api/auth/logout", { method: "GET" });

  removeClientInfo();
};

export const authAPI = {
  loginWithKakao,
  autoLogin,
  useLogout,
};
