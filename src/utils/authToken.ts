import {
  getToken as getServerToken,
  updateToken as updateServerToken,
  deleteToken as deleteServerToken,
  setToken as setServerToken,
  setAccessToken as setServerAccessToken
} from "./auth_server";
import {
  getToken as getClientToken,
  updateToken as updateClientToken,
  deleteToken as deleteClientToken,
  setToken as setClientToken,
  setAccessToken as setClientAccessToken
} from "./auth_client";

import { AuthToken } from "@/model/AuthToken";
import { isSSR } from "./isSSR";

export const getToken = (ssr?: boolean) => {
  if (ssr) return getServerToken();
  return getClientToken();
};

export const updateToken = (token: string) => {
  if (isSSR() || isSSR()) return updateServerToken(token);
  return updateClientToken(token);
};

export const deleteToken = () => {
  if (isSSR()) return deleteServerToken();
  return deleteClientToken();
};

export const setToken = (tokens: AuthToken) => {
  setServerToken(tokens);
  setClientToken(tokens);
};

export const setAccessToken = (at: string) => {
  setServerAccessToken(at);
  setClientAccessToken(at);
}
