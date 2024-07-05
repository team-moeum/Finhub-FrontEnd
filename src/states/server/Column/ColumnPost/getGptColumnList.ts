import { queryKeys } from "../../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getGptColumnList = async(page: number, size?: number) => {
  const response: ApiResponse = await get(
    `/api/v1/main/column?page=${page}&size=${size}`,
    queryKeys.gptColumnList(page, size),
  );

  // columnInfo -> id, title, date, ImgUrl, topicList
  return response.data;
}

export const getSsrGptColumnList = async(page: number, size?: number) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/column?page=${page}&size=${size}`,
    queryKeys.gptColumnList(page, size),
  );

  return response.data;
}