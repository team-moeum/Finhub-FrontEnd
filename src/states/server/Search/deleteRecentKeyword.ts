import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

/**
 * 최근 검색어 삭제 API
 * 성공 시: { status: "SUCCESS", data: "삭제 성공" }
 * 실패 시: { status: "FAIL", errorMsg: "최근검색 ID가 존재하지 않습니다." }
 */
export const deleteRecentKeyword = async () => {
  const response: ApiResponse = await fetchApi({
    method: "DELETE",
    path: `/api/v1/main/recentKeyword`,
    tags: mutationKeys.deleteUserAvatar,
  });

  if (response.status === "FAIL") {
    throw new Error(`Failed delete userAvatar: ${response.errorMsg}`);
  }

  return response;
}