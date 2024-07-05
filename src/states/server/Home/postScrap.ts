import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";
import { post } from "@/api/client";

export const postScrap = async(param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/scrap`,
    mutationKeys.scrap,
    param
  );

  return response.status;
}