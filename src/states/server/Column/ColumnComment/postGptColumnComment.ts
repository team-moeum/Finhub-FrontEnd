import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";


export const postGptColumnComment = async(param: any) => {
  const response: ApiResponse = await fetchApi({
    method: "POST",
    path: `/api/v1/main/column/comment`,
    tags: mutationKeys.gptColumnLike,
    body: param
  });

  if (response.status === "FAIL") {
    return {status: response.status, errorMsg: response.errorMsg}
  }

  return response;
}