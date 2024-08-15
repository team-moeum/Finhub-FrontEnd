import { mutationKeys } from "../../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postGptColumnLike = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/column/like`,
    mutationKeys.gptColumnLike,
    param
  );

  return response.status;
};
