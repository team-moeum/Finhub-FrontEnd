import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getAnnounce = async (cursorId?: number, size=7, ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/announce?cursorId=${cursorId || ""}&size=${size}`,
    tags: queryKeys.userAvatarList,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.info;
}