import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

export const postNickname = async(param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/menu/setting/nickname`,
    tags: mutationKeys.nickname,
    body: param
  });

  /** Sever Error 수정 */
  if (response.status === "FAIL") {
    return {status: "DUPLICATION"}

    // if (response.errorMsg === "이미 존재하는 닉네임입니다.") {
    //   return {status: "DUPLICATION"}
    // } else {
    //   throw new Error(`Failed update nickName: ${response.errorMsg}`);
    // }
  } 

  return response;
}