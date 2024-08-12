import { mutationKeys } from "../mutations";

import { remove } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const deleteUserAvatar = async () => {
  const response: ApiResponse = await remove(
    `/api/v1/main/menu/setting/avatar`,
    mutationKeys.deleteUserAvatar
  );

  return response;
};
