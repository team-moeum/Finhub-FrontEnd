import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getTopicList = async (categoryId: number, ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    tags: queryKeys.topicList(categoryId),
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.topicList;
}