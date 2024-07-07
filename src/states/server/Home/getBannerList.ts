import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getBannerList = async() => {
  const response: ApiResponse = await get(
    `/api/v1/main/home/banner`,
    queryKeys.category
  );

  return response.data?.bannerList;
}

export const getSsrBannerList = async() => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/home/banner`,
    queryKeys.category
  );

  return response.data?.bannerList;
}