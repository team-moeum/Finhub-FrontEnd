import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";


export const postGptColumnLike = async(param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/column/like`,
    tags: mutationKeys.gptColumnLike,
    body: param
  });

  return response.status;
}