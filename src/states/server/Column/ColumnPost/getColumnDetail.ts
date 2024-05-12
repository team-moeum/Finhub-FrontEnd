import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";

export const getColumnDetail = async(ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column/2`,
    // tags 수정 필요 .. 어떻게 ?
    tags: queryKeys.column,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  // id, title, content, summary, date, ImgUrl, topicList
  return response.data;
}