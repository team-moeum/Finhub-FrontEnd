import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

export const getUserAvatarList = async (ssr?:boolean) => {
  const response: ApiResponse = await fetchApi({
    method: "GET",
    path: `/api/v1/main/menu/setting/avatar`,
    tags: queryKeys.userAvatarList,
    ssr
  });

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.avatarList;
}