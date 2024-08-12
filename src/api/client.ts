import { ApiMethods, ApiConfig } from "./type";
import {
  ApiError,
  ForbiddenError,
  InternetServerError,
  UnauthorizedError,
} from "./error";
import { getToken } from "@/utils/authToken";
import { authAPI } from "./auth";

export async function request<T>(
  method: ApiMethods,
  endpoint: string,
  config: ApiConfig = {ssr: false}
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`

  async function makeRequest(tokens: {accessToken?: string | null, refreshToken?: string | null}) {
    const options: RequestInit = {
      method: method,
      next: {
        tags: config.tags,
      },
      headers: new Headers({
        "Content-Type": "application/json",
        finhub: `${process.env.NEXT_PUBLIC_API_KEY}`,
        Authorization: `Bearer ${tokens.accessToken || ""}`,
        refreshToken: `${tokens.refreshToken || ""}`,
        ...config.headers,
      }),
      body: method !== "GET" ? JSON.stringify(config.body) : null,
    };
    
    return fetch(url, options);
  }

  try {
    let tokens = getToken(config.ssr);
    let response = await makeRequest(tokens);

    if (!response.ok) {
      if (config.bypass) {
        try {
          return (await response.json()) as T;
        } catch {
          return { status: "FAIL"} as T;
        }
      }

      switch (response.status) {
        case 401:
          throw new UnauthorizedError("Unauthorized access");
        case 403:
          /** refreshAccessToken and Refetch */
          await authAPI.refreshAccessToken();
          tokens = getToken(config.ssr);
          response = await makeRequest(tokens);
          if (response.ok) {
            return (await response.json()) as T;
          }
          throw new ForbiddenError("Forbidden error");
        default:
          const result = await response.json();
          const message = result?.errorMsg || "An error occurred";
          throw new ApiError(response.status, message);
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
  tags = [] as string[],
  body = {},
  headers = {}
): Promise<T> {
  return request<T>("POST", endpoint, { body, headers, tags });
}

export function put<T>(
  endpoint: string,
  tags = [] as string[],
  body = {},
  headers = {}
): Promise<T> {
  return request<T>("PUT", endpoint, { body, headers, tags });
}

export function remove<T>(
  endpoint: string,
  tags = [] as string[],
  body = {},
  headers = {}
): Promise<T> {
  return request<T>("DELETE", endpoint, { body, headers, tags });
}

export function patch<T>(
  endpoint: string,
  tags = [] as string[],
  body = {},
  headers = {}
): Promise<T> {
  return request<T>("PATCH", endpoint, { body, headers, tags });
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