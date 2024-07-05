import { ApiMethods, ApiConfig } from "./type";
import {
  ApiError,
  ForbiddenError,
  InternetServerError,
  UnauthorizedError,
} from "./error";
import { getToken } from "@/utils/authToken";

export async function request<T>(
  method: ApiMethods,
  endpoint: string,
  config: ApiConfig = {ssr: false}
): Promise<T> {
  const url = `${config.ssr ? process.env.NEXT_PUBLIC_BASE_URL : ""}${endpoint}`;

  const tokens = getToken(config.ssr);

  const options: RequestInit = {
    method: method,
    next: {
      tags: config.tags,
    },
    headers: new Headers({
      "Content-Type": "application/json",
      finhub: `${process.env.NEXT_PUBLIC_API_KEY}`,
      Authorization: `Bearer ${tokens.accessToken}`,
      refreshToken: `${tokens.refreshToken}`,
      ...config.headers,
    }),
    body: method !== "GET" ? JSON.stringify(config.body) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok && !config.bypass) {
      switch (response.status) {
        case 401:
          throw new UnauthorizedError("Unauthorized access");
        case 403:
          throw new ForbiddenError("Forbidden error");
        default:
          throw new ApiError(response.status, "An error occurred");
      }
    }
    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof Response) {
      throw new InternetServerError("Server error");
    }
    throw error;
  }
}

export function get<T>(
  endpoint: string,
  tags = [] as string[],
  headers = {},
  bypass?: boolean
): Promise<T> {
  return request<T>("GET", endpoint, { headers, tags, bypass });
}

export function post<T>(
  endpoint: string,
  body = {},
  tags = [] as string[],
  headers = {}
): Promise<T> {
  return request<T>("POST", endpoint, { body, headers, tags });
}

export function put<T>(
  endpoint: string,
  body = {},
  tags = [] as string[],
  headers = {}
): Promise<T> {
  return request<T>("PUT", endpoint, { body, headers, tags });
}

export function remove<T>(
  endpoint: string,
  tags = [] as string[],
  headers = {}
): Promise<T> {
  return request<T>("DELETE", endpoint, { headers, tags });
}

/**
 * ssr api request for prefetch
 */
export function getSsr<T>(
  endpoint: string,
  tags = [] as string[],
  headers = {},
  bypass?: boolean
): Promise<T> {
  return request<T>("GET", endpoint, { headers, tags, ssr: true, bypass });
}