export type ApiMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiConfig {
  tags?: string[];
  body?: Record<string, any>;
  headers?: Record<string, string>;
  ssr?: boolean;
  bypass?: boolean;
}

export interface ApiResponse {
  status: "SUCCESS" | "FAIL";
  errorMsg?: string;
  data?: any;
}
