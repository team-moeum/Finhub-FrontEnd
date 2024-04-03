import { getCategory } from "./Post/getCategory";
import { getTopicList } from "./Post/getTopicList";

export const queryKeys = {
    category: ['category'],
    topicList: (categoryId: number) => ["topicList", `${categoryId}`]
}

export const queryOptions = {
    category: {
        queryKey: queryKeys.category,
        queryFn: () => getCategory()
    },
    topicList: (categoryId: number) => ({
        queryKey: queryKeys.topicList(categoryId),
        queryFn: () => getTopicList(categoryId)
    })
  };
  