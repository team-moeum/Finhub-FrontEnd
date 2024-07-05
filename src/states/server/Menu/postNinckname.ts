import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";
import { post } from "@/api/client";

export const postNickname = async(param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/menu/setting/nickname`,
    mutationKeys.nickname,
    param
  );

  if (response.status === "FAIL") {
    return {status: "DUPLICATION"}
  } 

  return response;
}