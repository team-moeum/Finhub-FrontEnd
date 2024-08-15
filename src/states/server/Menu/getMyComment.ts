import { queryKeys } from "../queries";

import { get } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const getMyComment = async () => {
  const response: ApiResponse = await get(`/api/v1/main/menu/comment`, queryKeys.myComment());

  return response.data;
};
