import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";

/**
 * 멤버 정보 조회 API
 * @returns {User}
 *          
 */
export const getUserInfo = async (ssr?: boolean) => {
    const response: ApiResponse = await fetchApi({
        method: "GET",
        path: `/api/v1/auth/info`,
        tags: queryKeys.userInfo,
        ssr
    });

    if (response.status === "FAIL") {
        return null;
    }

    return response.data?.info;
}