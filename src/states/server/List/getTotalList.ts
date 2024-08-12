import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getTotalList = async (categoryId: number) => {
  if (categoryId < 0) return null;

  const response: ApiResponse = await get(
    `/api/v1/main/list?categoryId=${categoryId}`,
    queryKeys.totalList(categoryId)
  );

  return response.data?.topicList;
};

export const getSsrTotalList = async (categoryId: number) => {
  if (categoryId < 0) return null;

  const response: ApiResponse = await getSsr(
    `/api/v1/main/list?categoryId=${categoryId}`,
    queryKeys.totalList(categoryId)
  );

  return response.data?.topicList;
};
