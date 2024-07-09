import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get, getSsr } from "@/api/client";
import { isUserLoginSsr } from "@/utils/auth_server";
import { isLoggedIn } from "@/utils/auth_client";

/**
 * 멤버 정보 조회 API
 * @returns {User}
 *          
 */
export const getUserInfo = async () => {
  if (!isLoggedIn()) return null;
  
  const response: ApiResponse = await get(
    `/api/v1/auth/info`,
    queryKeys.userInfo,
  );

  if (response.status === "FAIL") {
    return null;
  }

  return response.data?.info;
}

export const getSsrUserInfo = async () => {
  if(!isUserLoginSsr()) return null;

  const response: ApiResponse = await getSsr(
    `/api/v1/auth/info`,
    queryKeys.userInfo,
  );

  if (response.status === "FAIL") {
    return null;
  }

  return response.data?.info;
}