import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getNextTopic = async (categoryId: number, topicId: number) => {
  const response: ApiResponse = await get(
    `/api/v1/main/nextTopic/${categoryId}/${topicId}`,
    queryKeys.nextTopic(categoryId, topicId)
  );

  return response.data?.nextTopic;
};

export const getSsrNextTopic = async (categoryId: number, topicId: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/nextTopic/${categoryId}/${topicId}`,
    queryKeys.nextTopic(categoryId, topicId)
  );

  return response.data?.nextTopic;
};
