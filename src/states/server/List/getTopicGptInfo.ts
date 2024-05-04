import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getTopicGptInfo = async(categoryId:number, topicId: number, userTypeId: number, ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/gptContent?categoryId=${categoryId}&topicId=${topicId}&usertypeId=${userTypeId}`,
    tags: queryKeys.topicInfo(topicId),
    ssr
  });

  if (response.status === "FAIL") {
    return {name: "", content: ""};
  }

  return response.data?.contentInfo;
}