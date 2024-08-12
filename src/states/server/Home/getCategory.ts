import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getCategory = async () => {
  const response: ApiResponse = await get("/api/v1/main/home/categoryList", queryKeys.category);

  return response.data?.categoryList;
};

export const getSsrCategory = async () => {
  const response: ApiResponse = await getSsr("/api/v1/main/home/categoryList", queryKeys.category);

  return response.data?.categoryList;
};
