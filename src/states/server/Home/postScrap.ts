import { mutationKeys } from "../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postScrap = async (param: any) => {
  const response: ApiResponse = await post(`/api/v1/main/scrap`, mutationKeys.scrap, param);

  return response.status;
};
