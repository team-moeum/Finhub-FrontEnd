const prefix = "/api";
export const baseURL = (process.env.NEXT_PUBLIC_BASE_URL ?? "") + prefix;

export interface ApiResponse {
  apiStatus?: "SUCCESS" | "FAIL";
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
  tags?: string[];
}
