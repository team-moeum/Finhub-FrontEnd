import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queryOptions";
import { ApiResponse } from "@/api/client";

export const getBannerList = async() => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/banner`,
    tags: queryKeys.banner
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.bannerList;
}