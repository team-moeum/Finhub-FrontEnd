import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";
import { post } from "@/api/client";

export const postUserType = async(param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/menu/setting/usertype`,
    mutationKeys.userType,
    param
  ); 

  return response;
}