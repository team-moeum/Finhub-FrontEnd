import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queryOptions";
import { ApiResponse } from "@/api/fetchApi";

export const getCategory = async() => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/categoryList`,
    tags: queryKeys.category
  });

  if (response.apiStatus === "FAIL") {
    return [];
  }

  return response.data?.categoryList;
}