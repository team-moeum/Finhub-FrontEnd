import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 알림 조회 (읽기) api
 * @param id alarm id
 *
 */
export const postAlarm = async (param: { id: number }) => {
  const response: ApiResponse = await post(`/api/v1/main/alarm`, mutationKeys.readAlarm, {
    ...param
  });

  return response;
};
