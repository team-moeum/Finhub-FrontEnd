import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { MyComment } from "@/model/MyComment";

export const getMyComment = async (ssr?: boolean) => {
    const response: ApiResponse = await fetchApi({
        method: "GET",
        path: `/api/v1/main/menu/comment`,
        tags: queryKeys.myComment(),
        ssr
    });

    return response.data;
}