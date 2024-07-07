"use client";

import { userState } from "@/states/client/atoms/user";
import { useRecoilValue } from "recoil";
import { storageAPI } from "./localStorage";
import { TokenKeys } from "@/configs/enum";
import { AuthToken } from "@/model/AuthToken";

export const useIsLoginCsr = () => {
  const userInfo = useRecoilValue(userState);

  return userInfo.name !== "";
};

export function getToken(): {
  accessToken: string | null;
  refreshToken: string | null;
} {
  const accessToken = storageAPI.get(TokenKeys.ACCESS_TOKEN);
  const refreshToken = storageAPI.get(TokenKeys.REFRESH_TOKEN);
  return { accessToken, refreshToken };
}
export function setToken(tokens: AuthToken): void {
  storageAPI.set(TokenKeys.ACCESS_TOKEN, tokens.accessToken ?? "");
  storageAPI.set(TokenKeys.REFRESH_TOKEN, tokens.refreshToken ?? "");
}
export function updateToken(accessToken: string): void {
  storageAPI.set(TokenKeys.ACCESS_TOKEN, accessToken);
}
export function deleteToken(): void {
  storageAPI.remove(TokenKeys.ACCESS_TOKEN);
  storageAPI.remove(TokenKeys.REFRESH_TOKEN);
}
export function isLoggedIn(): boolean {
  return storageAPI.get(TokenKeys.ACCESS_TOKEN) !== null;
}
export function setAccessToken(at: string): void {
  storageAPI.set(TokenKeys.ACCESS_TOKEN, at ?? "");
}
