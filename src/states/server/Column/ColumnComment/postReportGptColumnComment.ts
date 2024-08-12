import { mutationKeys } from "../../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 컬럼 댓글 수정 API
 * @param {number} commentId 댓글 id
 * @param {number} reportId 신고 이유 id
 * 성공 시: { status: "SUCCESS" }
 * 실패 시: { status: "FAIL", errorMsg: "이미 신고한 댓글입니다." }
 * 실패 시: { status: "FAIL", errorMsg: "댓글ID 존재하지 않습니다." }
 * 실패 시: { status: "FAIL", errorMsg: "신고사유ID가 존재하지 않습니다." }
 */
export const postReportGptColumnComment = async (commentId: number, reportId: number) => {
  const response: ApiResponse = await post(
    `/api/v1/main/column/comment/actions`,
    mutationKeys.reportGptColumnComment,
    { commentId, reportId }
  );

  return response;
};
