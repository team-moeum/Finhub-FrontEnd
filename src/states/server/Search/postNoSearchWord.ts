import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 없는 단어 요청 API
 * @param {string} keyword
 * 성공 시: { status: "SUCCESS", data: "삭제 성공" }
 * 성공 시: { status: "SUCCESS", data: "이미 요청처리 된 단어입니다." }
 * 실패 시: { status: "FAIL", errorMsg: "" }
 */
export const postNoSearchWord = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/search/keyword`,
    mutationKeys.updateNoSearchWord,
    param
  );

  return response;
};
