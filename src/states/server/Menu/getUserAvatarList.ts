import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getUserAvatarList = async () => {
  const response: ApiResponse = await get(
    `/api/v1/main/menu/setting/avatar`,
    queryKeys.userAvatarList
  );

  return response.data?.avatarList;
};

export const getSsrUserAvatarList = async () => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/menu/setting/avatar`,
    queryKeys.userAvatarList
  );

  return response.data?.avatarList;
};
