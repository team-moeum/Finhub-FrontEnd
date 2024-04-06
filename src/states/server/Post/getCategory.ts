import { API_BASE_URL } from "@/app/_component/MSWComponent";
import { queryKeys } from "../queryOptions";
import { ApiResponse, client } from "@/api/client";
import { fetchApi } from "@/api/fetchApi";

export const getCategory = async() => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/categoryList`,
    tags: queryKeys.category
  });

  if (response.status === "FAIL") {
    throw new Error(response.errorMsg)
  }

  return response.data?.categoryList;
}