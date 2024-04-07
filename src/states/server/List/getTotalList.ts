import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queryOptions";
import { ApiResponse } from "@/api/client";

export const getTotalList = async(categoryId: number) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/list?categoryId=${categoryId}`,
    tags: queryKeys.totalList(categoryId),
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.topicList;
}