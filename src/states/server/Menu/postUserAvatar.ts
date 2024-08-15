import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postUserAvatar = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/menu/setting/avatar`,
    mutationKeys.userAvatar,
    param
  );

  return response;
};
