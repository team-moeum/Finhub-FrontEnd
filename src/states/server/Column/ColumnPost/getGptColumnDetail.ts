import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";

export const getGptColumnDetail = async(id: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/column/${id}`,
    tags: queryKeys.gptColumnDetail(id),
    ssr
  });

  if (response.status === "FAIL") {
    return null;
  }

  // id, title, content, summary, date, ImgUrl, topicList
  return response.data;
}