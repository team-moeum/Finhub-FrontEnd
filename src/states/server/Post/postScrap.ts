import { API_BASE_URL } from "@/app/_component/MSWComponent";
import { queryKeys } from "../queryOptions";
import { ApiResponse, client } from "@/api/client";

export const postScrap = async(data: any) => {
  const response: ApiResponse = await client.post({
    host: API_BASE_URL,
    url: `/api/v1/main/scrap`,
    tags: queryKeys.topicList(data.topicId),
    body: data
  });

  if (response.status === "FAIL") {
    return []
  }

  return response.data?.topicList;
}