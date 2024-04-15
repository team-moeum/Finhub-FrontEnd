import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getBannerList = async(ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/home/banner`,
    tags: queryKeys.banner,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.bannerList;
}