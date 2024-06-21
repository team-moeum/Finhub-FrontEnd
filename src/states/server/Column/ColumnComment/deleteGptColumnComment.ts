import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";

/**
 * 컬럼 댓글 삭제 API
 * @param {number} id 댓글 id
 * 성공 시: { status: "SUCCESS" }
 * 실패 시: { status: "FAIL", errorMsg: "이미 삭제한 댓글입니다." }
 * 실패 시: { status: "FAIL", errorMsg: "자신의 댓글만 삭제 할 수 있습니다." }
 */
export const deleteGptColumnComment = async (id: number) => {
  const response: ApiResponse = await fetchApi({
    method: "DELETE",
    path: `/api/v1/main/column/comment/actions`,
    tags: mutationKeys.deleteGptColumnComment,
    body: {id}
  });

  return response;
}