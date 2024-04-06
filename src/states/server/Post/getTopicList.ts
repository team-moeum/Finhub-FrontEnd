import { queryKeys } from "../queryOptions";

export const getTopicList = async (categoryId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/main/home/topicList?categoryId=${categoryId}`,
    {
      next: {
        tags: queryKeys.topicList(categoryId),
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        finhub: process.env.NEXT_PUBLIC_API_KEY || "",
      },
    }
  );

  const response = await data.json();

  if (response.status === "FAIL") {
    throw new Error(response.errorMsg);
  }

  return response.data?.topicList;
};
