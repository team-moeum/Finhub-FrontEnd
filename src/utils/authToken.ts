import {
  getToken as getServerToken,
  updateToken as updateServerToken,
  deleteToken as deleteServerToken,
  setToken as setServerToken,
} from "./auth_server";
import {
  getToken as getClientToken,
  updateToken as updateClientToken,
  deleteToken as deleteClientToken,
  setToken as setClientToken,
} from "./auth_client";
import { AuthToken } from "@/model/AuthToken";
import { isSSR } from "./isSSR";

export const getToken = () => {
  if (isSSR()) return getServerToken();
  return getClientToken();
};

export const updateToken = (token: string) => {
  if (isSSR()) return updateServerToken(token);
  return updateClientToken(token);
};

export const deleteToken = () => {
  if (isSSR()) return deleteServerToken();
  return deleteClientToken();
};

export const setToken = (tokens: AuthToken) => {
  if (isSSR()) return setServerToken(tokens);
  return setClientToken(tokens);
};
