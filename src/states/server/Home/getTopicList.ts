import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getTopicList = async (categoryId: number) => {
  if (categoryId < 0) return null;

  const response: ApiResponse = await get(
    `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    queryKeys.category
  );

  return response.data?.topicList;
};

export const getSsrTopicList = async (categoryId: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/home/topicList?categoryId=${categoryId}`,
    queryKeys.category
  );

  return response.data?.topicList;
};
