const prefix = "/api";
const baseURL = (process.env.NEXT_PUBLIC_BASE_URL ?? "") + prefix;

export interface ApiResposne {
  status: "SUCCESS" | "FAIL";
  errorMsg?: string;
  data?: any;
}

export interface ApiParams {
  host?: string;
  path: string;
  tags?: string[];
  init?: RequestInit;
}

export interface ApiRequest extends ApiUrlRequest {
  body: { [key: string]: any };
}

export interface ApiUrlRequest {
  host?: string;
  url: string;
}

async function fetchApi<T>({
  host = baseURL,
  path,
  tags,
  init,
}: ApiParams): Promise<T> {
  const url = `${host}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    next: {
      tags,
    },
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      finhub: process.env.NEXT_PUBLIC_API_KEY ?? "",
      Authorization: `Bearer `,
      refreshToken: ``,
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
  get: <Response = unknown>({ host, url }: ApiUrlRequest) => Promise<Response>;
  post: <Response = unknown>({
    host,
    url,
    body,
  }: ApiRequest) => Promise<Response>;
  put: <Response = unknown>({
    host,
    url,
    body,
  }: ApiRequest) => Promise<Response>;
  delete: <Response = unknown>({
    host,
    url,
  }: ApiUrlRequest) => Promise<Response>;
}

export const client: FetchInstance = {
  get: async function api<Response = unknown>({ host, url }: ApiUrlRequest) {
    const data = await fetchApi<Response>({ host, path: url });
    return data;
  },
  post: async function api<Response = unknown>({
    host,
    url,
    body,
  }: ApiRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "POST", body: JSON.stringify(body) },
    });
    return data;
  },
  put: async function api<Response = unknown>({ host, url, body }: ApiRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "PUT", body: JSON.stringify(body) },
    });
    return data;
  },
  delete: async function api<Response = unknown>({ host, url }: ApiUrlRequest) {
    const data = await fetchApi<Response>({
      host,
      path: url,
      init: { method: "DELETE" },
    });
    return data;
  },
};
