import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";
import { post } from "@/api/client";

/**
 * 컬럼 댓글 사용자 차단 API
 * @param {number} memberId 차단 할 멤버 id
 * 성공 시: { status: "SUCCESS" }
 */
export const postBanGptColumnComment = async (memberId: number) => {
  const response: ApiResponse = await post(
    `/api/v1/main/column/block`,
    mutationKeys.banGptColumnComment,
    { memberId }
  );

  return response;
}