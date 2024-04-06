import { API_BASE_URL } from "@/app/_component/MSWComponent";
import { queryKeys } from "../queryOptions";
import { ApiResponse, client } from "@/api/client";
import { storageAPI } from "@/utils/localStorage";
import { fetchApi } from "@/api/fetchApi";

export const getTopicList = async (categoryId: number) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    tags: queryKeys.topicList(categoryId)
  });

  if (response.status === "FAIL") {
    throw new Error(response.errorMsg)
  }

  console.log(response);

  return response.data?.topicList;
}