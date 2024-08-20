import { queryKeys } from "../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * Gpt 컬럼 검색 API
 * @param type 검색 유형 ('title', 'summary', 'both')
 * @param keyword 검색 키워드 문자열
 * @param page 검색 결과의 페이지 번호
 * @param ssr 서버 사이드 렌더링을 위한 선택적 매개변수, true로 설정하면 서버 사이드에서 API 호출
 * @returns 검색 결과로 `SearchResult[]` 배열과 페이지 정보 `SearchPageInfo`를 반환
 *          API 호출이 실패하면 결과 배열이 비어있고, 페이지 정보는 초기값으로 설정됩니다.
 */

export const getSearchGptColumn = async (
  type: "title" | "summary" | "both",
  keyword: string,
  page: number
) => {
  const response: ApiResponse = await get(
    `/api/v1/main/search/column/${type}?keyword=${keyword}&page=${page}`,
    queryKeys.popularKeywordList
  );

  if (response.status === "FAIL") {
    return { result: [], pageInfo: { currentPage: 0, totalPages: 0, totalResults: 0 } };
  }

  return response.data;
};
