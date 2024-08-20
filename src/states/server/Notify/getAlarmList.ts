import { queryKeys } from "../queries";

import { get, getSsr } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getAlarmList = async (cursorId?: number, size = 10) => {
  const path = cursorId
    ? `/api/v1/main/alarm?cursorId=${cursorId}&size=${size}`
    : `/api/v1/main/alarm?size=${size}`;

  const response: ApiResponse = await get(path, queryKeys.alarm(cursorId, size));

  return response.data?.alarmList;
};

export const getSsrBannerList = async () => {
  const response: ApiResponse = await getSsr(`/api/v1/main/home/banner`, queryKeys.category);

  return response.data?.bannerList;
};
