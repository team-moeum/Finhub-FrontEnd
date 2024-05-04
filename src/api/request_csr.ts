import { fetchApi } from "./fetchApi";
import { ApiParams, ApiResponse } from "./type";
import { getBaseUrl } from "@/utils/url";

export async function requestCsr({
    method,
    path,
    tags,
    use,
    body,
  }: ApiParams) {
    const url = getBaseUrl();
    const res = await fetch(`${url}/api/${method}`, {
      method: "POST",
      next: {
        tags,
      },
      body: JSON.stringify({
        path: path,
        body: body,
        use
      })
    });

    if (!res.ok) return {status: "FAIL"};

    const data =  await res.json();

    if (data.status === "FAIL") console.log(path, body, data.errorMsg);
  
    return data;
 }