import { mutationKeys } from "../mutations";

import { patch, post } from "@/api/client";
import { ApiResponse } from "@/api/type";

/**
 * 메뉴 - 알람 - 푸시허용여부 api
 * @param yn push alarm 활성화 여부
 *
 */
export const patchPushAlarmYn = async (param: { yn: boolean }) => {
  const response: ApiResponse = await patch(`/api/v1/main/menu/push`, mutationKeys.pushAlarmYn, {
    ...param
  });

  return response;
};
