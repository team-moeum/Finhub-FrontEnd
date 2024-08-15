import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getBannerList = async () => {
  const response: ApiResponse = await get(`/api/v1/main/home/banner`, queryKeys.category);

  return response.data?.bannerList;
};

export const getSsrBannerList = async () => {
  const response: ApiResponse = await getSsr(`/api/v1/main/home/banner`, queryKeys.category);

  return response.data?.bannerList;
};
