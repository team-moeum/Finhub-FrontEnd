import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

import { MyScrapRequest } from "@/model/MyScrap";

export const getMyScrap = async (type: MyScrapRequest) => {
  const response: ApiResponse = await get(
    `/api/v1/main/menu/myscrap/${type}`,
    queryKeys.myScrap(type)
  );

  return response.data;
};

export const getSsrMyScrap = async (type: MyScrapRequest) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/menu/myscrap/${type}`,
    queryKeys.myScrap(type)
  );

  return response.data;
};
