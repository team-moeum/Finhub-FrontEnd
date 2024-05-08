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