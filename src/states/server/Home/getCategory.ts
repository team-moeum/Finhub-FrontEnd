import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getCategory = async () => {
  const response: ApiResponse = await get(
    "/api/v1/main/home/categoryList",
    queryKeys.category
  );

  return response.data?.categoryList;
}

export const getSsrCategory = async () => {
  const response: ApiResponse = await getSsr(
    "/api/v1/main/home/categoryList",
    queryKeys.category
  );

  return response.data?.categoryList;
}