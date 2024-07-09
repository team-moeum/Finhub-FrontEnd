import { queryKeys } from "../queries";
import { ApiResponse } from "@/api/type";
import { get } from "@/api/client";

export const getTopicGptInfo = async(categoryId:number, topicId: number, userTypeId: number) => {
  if (userTypeId === 0) return {name: "", content: ""};

  const response: ApiResponse = await get(
    `/api/v1/main/gptContent?categoryId=${categoryId}&topicId=${topicId}&usertypeId=${userTypeId}`,
    queryKeys.topicInfo(topicId),
    {},
    true
  );

  if (response.status === "FAIL") {
    return {name: "", content: ""};
  }

  return response.data?.contentInfo;
}