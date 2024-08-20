import { queryKeys } from "../../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 컬럼 댓글 신고 사유 조회 API
 */
export const getReportReasons = async () => {
  const response: ApiResponse = await get(
    `/api/v1/main/column/comment/actions`,
    queryKeys.reportReasons
  );

  return response?.data?.reportReasons;
};
