import { queryKeys } from "../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getAnnounce = async (cursorId?: number, size = 7) => {
  const response: ApiResponse = await get(
    `/api/v1/main/announce?cursorId=${cursorId || ""}&size=${size}`,
    queryKeys.userAvatarList
  );

  if (response.status === "FAIL") {
    return [];
  }

  return response.data?.info;
};
