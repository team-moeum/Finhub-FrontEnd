import {
  deleteToken as deleteClientToken,
  getToken as getClientToken,
  setAccessToken as setClientAccessToken,
  setToken as setClientToken,
  updateToken as updateClientToken
} from "./auth_client";
import {
  deleteToken as deleteServerToken,
  getToken as getServerToken,
  setAccessToken as setServerAccessToken,
  setToken as setServerToken,
  updateToken as updateServerToken
} from "./auth_server";
import { isSSR } from "./isSSR";

import { AuthToken } from "@/model/AuthToken";

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
};
