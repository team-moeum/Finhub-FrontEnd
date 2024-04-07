import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queryOptions";
import { ApiResponse } from "@/api/fetchApi";

export const getTopicList = async (categoryId: number) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    tags: queryKeys.topicList(categoryId)
  });

  if (response.apiStatus === "FAIL") {
    return [];
  }

  return response.data?.topicList;
}