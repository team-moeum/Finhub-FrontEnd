import { deleteToken, getToken, updateToken } from "@/utils/auth_server";
import { ApiParams } from "./type";
import { getBaseUrl } from "@/utils/url";

export async function requestSsr({
    method,
    path,
    use,
    tags,
    body,
  }: ApiParams) {
    const url = getBaseUrl();
    const Tokens = getToken();

    const res = await fetch(`${url}/api/${method}`, {
      method: "POST",
      next: {
        tags,
      },
      body: JSON.stringify({
        path: path,
        body: body,
        token: Tokens,
        use,
        ssr: true
      })
    });
    
    if (!res.ok) return {status: "FAIL"};

    let data =  await res.json();

    if (data.status === "EXPIRED_ALL_TOKEN") {
      deleteToken();
      return {status : "EXPIRED_ALL_TOKEN"};
    }

    if (data.status === "EXPIRED_TOKEN") {
      
      const updateAccessToken = data.token;
      updateToken(updateAccessToken);

      const resRetry = await fetch(`${url}/api/${method}`, {
        method: "POST",
        next: {
          tags,
        },
        body: JSON.stringify({
          path: path,
          body: body,
          token: getToken(),
          use,
          ssr: true
        })
      });
      
      if (!resRetry.ok) return {status: "FAIL"};
      data =  await resRetry.json();
    }
  
    return data;
 }
