import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { MyScrapRequest } from "@/model/MyScrap";

export const getMyScrap = async (type: MyScrapRequest, ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/menu/myscrap/${type}`,
    tags: queryKeys.myScrap(type),
    ssr
  });

  if (response.status === "FAIL") {
    return null;
  }

  return response.data;
}