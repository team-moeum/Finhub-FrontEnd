import { mutationKeys } from "../../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postGptColumnComment = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/column/comment`,
    mutationKeys.gptColumnLike,
    param
  );

  return response;
};
