"use client";

import { useRouter } from "next/navigation";
import { useResetRecoilState } from "recoil";

import { fetchApi } from "./fetchApi";
import { userState } from "@/states/client/atoms/user";
import { storageAPI } from "@/utils/localStorage";
import { ApiResponse } from "@/api/type";

const loginWithKakao = async (kakaoCode: string | null) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    use: "auth",
    path: `/api/v1/auth/login/oauth2/callback/kakao?code=${kakaoCode}`
  });

  storageAPI.set("access-token", response.data.token.accessToken);
  storageAPI.set("refresh-token", response.data.token.refreshToken);

  return response;
};

/* 수정 필요 */
const autoLogin = async () => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: '/api/v1/auth/autoLogin',
    body: {token: "fcm"},
  });

  storageAPI.set("access-token", response.data.token.accessToken);
  storageAPI.set("refresh-token", response.data.token.refreshToken);

  return response;
};

const useLogout = async () => {
  const router = useRouter();
  const resetUser = useResetRecoilState(userState);

  await fetch("/api/auth/logout", { method: "GET" });

  storageAPI.remove("access-token");
  storageAPI.remove("refresh-token");
  resetUser();
  
  router.refresh();
};

export const authAPI = {
  loginWithKakao,
  autoLogin,
  useLogout,
};
