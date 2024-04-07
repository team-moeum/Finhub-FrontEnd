import { getBaseUrl } from "@/utils/url";

export interface ApiParams {
  method: "GET" | "POST";
  path: string;
  tags: string[];
  body?: { [key: string]: any };
}

export interface ApiResponse {
  apiStatus?: "SUCCESS" | "FAIL";
  status: "SUCCESS" | "FAIL";
  errorMsg?: string;
  data?: any;
}

export async function fetchApi<T>({
    method,
    path,
    tags,
    body,
  }: ApiParams): Promise<T> {
    const res = await fetch(`/api/${method}`, {
      method: "POST",
      next: {
        tags,
      },
      body: JSON.stringify({
        path: path,
        body: body,
      })
    });

    if (!res.ok) {
      console.log(res);
      return {status: "FAIL"} as T;
    }
  
    const contentType = res.headers.get("content-type");
    const jsonParseAvailable = contentType && /json/.test(contentType);
  
    const data = (jsonParseAvailable ? await res.json() : await res.text()) as T;
  
    return data;
  }