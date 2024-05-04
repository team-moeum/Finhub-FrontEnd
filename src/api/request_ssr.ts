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
    const Tokens = getToken();
    const domain = process.env.NEXT_PUBLIC_FRONT_URL;

    console.log(domain);
    const res = await fetch(`${domain}/api/${method}`, {
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

      const resRetry = await fetch(`${domain}/api/${method}`, {
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
