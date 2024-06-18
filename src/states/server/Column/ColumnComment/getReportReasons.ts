import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { queryKeys } from "../../queries";

/**
 * 컬럼 댓글 신고 사유 조회 API
 */
export const getReportReasons = async () => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column/comment/actions`,
    tags: queryKeys.reportReasons,
  });

  return response?.data?.reportReasons;
}