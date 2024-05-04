import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getCategory = async(ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/categoryList`,
    tags: queryKeys.category,
    ssr
  });

  console.log(response);
  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.categoryList;
}