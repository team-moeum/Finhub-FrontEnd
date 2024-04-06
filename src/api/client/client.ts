import { storageAPI } from "@/utils/localStorage";
import { ApiParams, ApiRequest, ApiUrlRequest, baseURL } from "./common";

async function fetchApi<T>({
  host = baseURL,
  path,
  tags,
  init,
}: ApiParams): Promise<T> {
  const token = {accessToken: "", refreshToken: ""};
  const isServer = typeof window === 'undefined';
  if (isServer) {
    const { getToken } = require("@/utils/auth_server");
    token.accessToken = getToken().accessToken;
    token.refreshToken = getToken().refreshToken;
  } else {
    token.accessToken = storageAPI.get("access-token") || "";
    token.refreshToken = storageAPI.get("refresh-token") || "";
  }

  const url = `${host}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    next: {
      tags,
    },
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY ?? "",
      Authorization: `Bearer ${token.accessToken}`,
      refreshToken: `${token.refreshToken}`
    },
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  const contentType = res.headers.get("content-type");
  const jsonParseAvailable = contentType && /json/.test(contentType);

  const data = (jsonParseAvailable ? await res.json() : await res.text()) as T;

  return data;
}

export interface FetchInstance {
  get: <Response = unknown>({
    host,
    url,
    tags,
  }: ApiUrlRequest) => Promise<Response>;
  post: <Response = unknown>({
    host,
    url,
    body,
    tags,
  }: ApiRequest) => Promise<Response>;
  put: <Response = unknown>({
    host,
    url,
    body,
    tags,
  }: ApiRequest) => Promise<Response>;
  delete: <Response = unknown>({
    host,
    url,
    tags,
  }: ApiUrlRequest) => Promise<Response>;
}

export const client: FetchInstance = {
  get: async function api<Response = unknown>({
    host,
    url,
    tags,
  }: ApiUrlRequest) {
    const data = await fetchApi<Response>({ host, path: url, tags });
    return data;
  },
  post: async function api<Response = unknown>({
    host,
    url,
    body,
    tags,
  }: ApiRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "POST", body: JSON.stringify(body) },
      tags,
    });
    return data;
  },
  put: async function fetchClient<Response = unknown>({
    host,
    url,
    body,
    tags,
  }: ApiRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "PUT", body: JSON.stringify(body) },
      tags,
    });
    return data;
  },
  delete: async function api<Response = unknown>({
    host,
    url,
    tags,
  }: ApiUrlRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "DELETE" },
      tags,
    });
    return data;
  },
};
