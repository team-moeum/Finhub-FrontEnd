import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getTotalList = async(categoryId: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/list?categoryId=${categoryId}`,
    tags: queryKeys.totalList(categoryId),
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.topicList;
}