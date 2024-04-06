import { getTotalList } from "./List/getTotalList";
import { getCategory } from "./Post/getCategory";
import { getTopicList } from "./Post/getTopicList";

export const queryKeys = {
    category: ['category'],
    topicList: (categoryId: number) => ["topicList", `${categoryId}`],
    totalList: (categoryId: number) => ["totalList", `${categoryId}`]
}

export const queryOptions = {
    category: {
        queryKey: queryKeys.category,
        queryFn: () => getCategory()
    },
    topicList: (categoryId: number) => ({
        queryKey: queryKeys.topicList(categoryId),
        queryFn: () => getTopicList(categoryId)
    }),
    totalList: (categoryId: number) => ({
        queryKey: queryKeys.totalList(categoryId),
        queryFn: () => getTotalList(categoryId)
    }),
  };
  