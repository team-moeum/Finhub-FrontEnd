export type ApiMethods = "GET" | "POST" | "PUT" | "DELETE";

export interface ApiConfig {
  tags?: string[];
  body?: Record<string, any>;
  headers?: Record<string, string>;
  ssr?: boolean;
}

export interface ApiParams {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  use?: string;
  tags?: string[];
  body?: { [key: string]: any };
  ssr?: boolean;
}

export interface ApiResponse {
  status: "SUCCESS" | "FAIL";
  errorMsg?: string;
  data?: any;
}
