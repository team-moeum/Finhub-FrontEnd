import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 회원 탈퇴 api
 * @param id 회원 탈퇴 사유 id
 * @param reason 회원 탈퇴 사유
 *
 */
export const postQuit = async (param: { id: number; reason: string }) => {
  const response: ApiResponse = await post(`/api/v1/main/menu/setting/resign`, mutationKeys.quit, {
    ...param
  });

  return response;
};
