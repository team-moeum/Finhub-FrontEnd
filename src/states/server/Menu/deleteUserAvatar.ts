import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";
import { remove } from "@/api/client";

export const deleteUserAvatar = async() => {
  const response: ApiResponse = await remove(
    `/api/v1/main/menu/setting/avatar`,
    mutationKeys.deleteUserAvatar,
  );

  return response;
}