import { API_BASE_URL } from "@/app/_component/MSWComponent";
import { queryKeys } from "../queryOptions";
import { ApiResposne, client } from "@/api/client";

export const postScrap = async(data: any) => {
  const response: ApiResposne = await client.post({
    host: API_BASE_URL,
    url: `/api/v1/main/scrap`,
    tags: queryKeys.topicList(data.topicId),
    body: data
  });

  if (response.status === "FAIL") {
    throw new Error(response.errorMsg)
  }

  return response.data?.topicList;
}