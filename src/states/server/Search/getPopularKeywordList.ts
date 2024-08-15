import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 인기 검색어 날짜, 목록 API
 * @returns { string } date
 * @returns {PopularKeyword[]} popularSearchList
 */

export const getPopularKeywordList = async () => {
  const response: ApiResponse = await get(
    `/api/v1/main/popularKeyword`,
    queryKeys.popularKeywordList
  );

  return response.data;
};

export const getSsrPopularKeywordList = async () => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/popularKeyword`,
    queryKeys.popularKeywordList
  );

  return response.data;
};
