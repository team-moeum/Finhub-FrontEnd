import { queryKeys } from "../../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getGptColumnCommentList = async (
  id: number,
  type: number,
  page: number,
  size?: number
) => {
  const response: ApiResponse = await get(
    `/api/v1/main/column/comment/${id}/${type}?page=${page}&size=${size}`,
    queryKeys.gptColumnCommentList(id, type, page, size)
  );

  if (response.status === "FAIL") {
    return null;
  }

  return response.data;
};

export const getSsrGptColumnCommentList = async (
  id: number,
  type: number,
  page: number,
  size?: number
) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/column/comment/${id}/${type}?page=${page}&size=${size}`,
    queryKeys.gptColumnCommentList(id, type, page, size)
  );

  if (response.status === "FAIL") {
    return null;
  }

  return response.data;
};
