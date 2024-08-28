import { mutationKeys } from "../mutations";

import { patch } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const patchEmail = async (param: any) => {
  const response: ApiResponse = await patch(`/api/v1/member`, mutationKeys.email, param);

  return response;
};
