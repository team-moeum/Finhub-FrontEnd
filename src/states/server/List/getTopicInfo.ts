import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getTopicInfo = async(topicId: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/topicInfo?topicId=${topicId}`,
    tags: queryKeys.topicInfo(topicId),
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.topicInfo;
}