import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";

export const getUserAvatarList = async () => {
  const response: ApiResponse = await get(
    `/api/v1/main/menu/setting/avatar`,
    queryKeys.userAvatarList,
  );

  return response.data?.avatarList;
}

export const getSsrUserAvatarList = async () => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/menu/setting/avatar`,
    queryKeys.userAvatarList,
  );

  return response.data?.avatarList;
}