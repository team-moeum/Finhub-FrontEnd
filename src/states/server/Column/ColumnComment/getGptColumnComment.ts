import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";

export const getGptColumnCommentList = async(id: number, type: number, page: number, size?: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column/comment/${id}/${type}?page=${page}&size=${size}`,
    tags: queryKeys.gptColumnCommentList(id, type, page, size),
    ssr
  });

  if (response.status === "FAIL") {
    return null;
  }

  // id, nickname, date, AvatarImgPath, comment, like, userComment (bool) -> 본인 댓글 여부
  return response.data;
}