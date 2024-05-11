import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

/**
 * 없는 단어 요청 API
 * @param {string} keyword
 * 성공 시: { status: "SUCCESS", data: "삭제 성공" }
 * 성공 시: { status: "SUCCESS", data: "이미 요청처리 된 단어입니다." }
 * 실패 시: { status: "FAIL", errorMsg: "" }
 */
export const postNoSearchWord = async (param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/search/keyword`,
    tags: mutationKeys.updateNoSearchWord,
    body: param
  });

  if (response.status === "FAIL") {
    throw new Error(`Failed post NoSearchWord: ${response.errorMsg}`);
  }

  return response;
}