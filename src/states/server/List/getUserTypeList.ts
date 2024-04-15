import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getUserTypeList = async(ssr?: boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/usertypeList`,
    tags: queryKeys.userTypeList,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.usertypeList;
}