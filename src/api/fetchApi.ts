import { getBaseUrl } from "@/utils/url";

export interface ApiParams {
  method: "GET" | "POST";
  path: string;
  tags: string[];
  body?: { [key: string]: any };
}

export interface ApiResponse {
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
    // const url = getBaseUrl();
    const url = "http://localhost:3000"
    console.log(url);
    const res = await fetch(`${url}/api/${method}`, {
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