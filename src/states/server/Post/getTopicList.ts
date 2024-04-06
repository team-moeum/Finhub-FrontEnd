import { API_BASE_URL } from "@/app/_component/MSWComponent";
import { queryKeys } from "../queryOptions";
import { ApiResposne, client } from "@/api/client";

export const getTopicList = async(categoryId: number) => {
  const response: ApiResposne = await client.get({
    host: API_BASE_URL,
    url: `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    tags: queryKeys.topicList(categoryId)
  });

  if (response.status === "FAIL") {
    throw new Error(response.errorMsg)
  }

  return response.data?.topicList;
}