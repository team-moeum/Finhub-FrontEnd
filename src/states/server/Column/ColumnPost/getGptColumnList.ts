import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";

export const getGptColumnList = async(page: number, size?: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column?page=${page}&size=${size}`,
    tags: queryKeys.gptColumnList(page, size),
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  // columnInfo -> id, title, date, ImgUrl, topicList
  return response.data;
}