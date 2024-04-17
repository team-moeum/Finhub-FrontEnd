import { ApiParams } from "./type";
import { requestCsr } from "./request_csr";
import { requestSsr } from "./request_ssr";

export async function fetchApi({
  method,
  path,
  tags,
  use,
  body,
  ssr=false,
}: ApiParams) {
  let res = undefined;

  if (ssr) {
    res = await requestSsr({method, path, tags, use, body});  
  } else {
    res = await requestCsr({method, path, tags, use, body});
  }

  return res;
}