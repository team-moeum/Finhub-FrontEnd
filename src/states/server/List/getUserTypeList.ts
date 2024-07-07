import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getUserTypeList = async() => {
  const response: ApiResponse = await get(
    `/api/v1/main/usertypeList`,
    queryKeys.userTypeList,
  );

  return response.data?.usertypeList;
}

export const getSsrUserTypeList = async() => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/usertypeList`,
    queryKeys.userTypeList,
  );

  return response.data?.usertypeList;
}