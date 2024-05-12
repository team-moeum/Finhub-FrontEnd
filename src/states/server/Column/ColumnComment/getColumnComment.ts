import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";

export const getColumnDetail = async(ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column/comment/2/1?page=1&size=5`,
    // tags 수정 필요 .. 어떻게 ?
    // tags: ,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  // id, nickname, date, AvatarImgPath, comment, like, userComment (bool) -> 본인 댓글 여부
  return response.data.comments;
}