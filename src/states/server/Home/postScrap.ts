import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

export const postScrap = async(param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/scrap`,
    tags: mutationKeys.scrap,
    body: param
  });

  if (response.status === "FAIL") {
    throw new Error(`Failed to scrap: ${response.errorMsg}`);
  }

  return response.status;
}