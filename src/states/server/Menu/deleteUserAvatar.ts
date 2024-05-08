import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../mutations";

export const deleteUserAvatar = async() => {
  const response: ApiResponse = await fetchApi({
    method: "DELETE",
    path: `/api/v1/main/menu/setting/avatar`,
    tags: mutationKeys.deleteUserAvatar,
  });

  if (response.status === "FAIL") {
    throw new Error(`Failed delete userAvatar: ${response.errorMsg}`);
  } 

  return response;
}