import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

export const postUserAvatar = async(param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/menu/setting/avatar`,
    tags: mutationKeys.userAvatar,
    body: param
  });

  if (response.status === "FAIL") {
    throw new Error(`Failed update nickName: ${response.errorMsg}`);
  } 

  return response;
}