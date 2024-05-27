import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getNextTopic = async (categoryId: number, topicId: number, ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/nextTopic/${categoryId}/${topicId}`,
    tags: queryKeys.nextTopic(categoryId, topicId),
    ssr
  });

  if (response.status === "FAIL") {
    return {
      id: 0,
      title: "",
      img_path: ""
    };
  }

  return response.data?.nextTopic;
}