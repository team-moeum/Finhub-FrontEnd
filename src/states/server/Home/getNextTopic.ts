import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getNextTopic = async (categoryId: number, topicId: number) => {
  const response: ApiResponse = await get(
    `/api/v1/main/nextTopic/${categoryId}/${topicId}`,
    queryKeys.nextTopic(categoryId, topicId),
  );

  return response.data?.nextTopic;
}

export const getSsrNextTopic = async (categoryId: number, topicId: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/nextTopic/${categoryId}/${topicId}`,
    queryKeys.nextTopic(categoryId, topicId),
  );
  
  return response.data?.nextTopic;
}