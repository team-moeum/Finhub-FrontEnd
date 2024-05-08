import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

/**
 * 인기 검색어 날짜, 목록 API
 * @returns { string } date
 * @returns {PopularKeyword[]} popularSearchList
 */

export const getPopularKeywordList = async (ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/popularKeyword`,
    tags: queryKeys.popularKeywordList,
    ssr
  });

  if (response.status === "FAIL") {
    return {date: "", popularSearchList: []};
  }

  return response.data;
}