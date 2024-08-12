import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getTopicInfo = async (topicId: number) => {
  const response: ApiResponse = await get(
    `/api/v1/main/topicInfo?topicId=${topicId}`,
    queryKeys.topicInfo(topicId)
  );

  return response.data?.topicInfo;
};

export const getSsrTopicInfo = async (topicId: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/topicInfo?topicId=${topicId}`,
    queryKeys.topicInfo(topicId)
  );

  return response.data?.topicInfo;
};
