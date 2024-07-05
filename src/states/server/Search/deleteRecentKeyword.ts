import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";
import { remove } from "@/api/client";

/**
 * 최근 검색어 삭제 API
 * 성공 시: { status: "SUCCESS", data: "삭제 성공" }
 * 실패 시: { status: "FAIL", errorMsg: "최근검색 ID가 존재하지 않습니다." }
 */
export const deleteRecentKeyword = async () => {
  const response: ApiResponse = await remove(
    `/api/v1/main/recentKeyword`,
    mutationKeys.deleteUserAvatar,
  );

  return response;
}