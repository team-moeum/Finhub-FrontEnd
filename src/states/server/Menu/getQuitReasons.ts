import { queryKeys } from "../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 회원탈퇴 사유 조회 API
 */
export const getQuitReasons = async () => {
  const response: ApiResponse = await get(
    `/api/v1/main/menu/setting/resign/reasons`,
    queryKeys.quitReasons
  );

  return response?.data?.quitReasons;
};
