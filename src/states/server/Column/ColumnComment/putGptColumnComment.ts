import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";
import { put } from "@/api/client";

/**
 * 컬럼 댓글 수정 API
 * @param {number} id 댓글 id
 * @param {string} comment 댓글 id
 * 성공 시: { status: "SUCCESS" }
 * 실패 시: { status: "FAIL", errorMsg: "자신의 댓글만 수정 할 수 있습니다." }
 */
export const putGptColumnComment = async (id: number, comment: string) => {
  const response: ApiResponse = await put(
    `/api/v1/main/column/comment/actions`,
    mutationKeys.editGptColumnComment,
    {id, comment}
  );

  return response;
}