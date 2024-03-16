import { getCategory } from "./Post/getCategory";
import { getTopicList } from "./Post/getTopicList";

export const queryKeys = {
    category: ['category'],
    topicList: (category: string) => ["topicList", category]
}

export const queryOptions = {
    category: {
        queryKey: queryKeys.category,
        queryFn: () => getCategory()
    },
    topicList: (category: string) => ({
        queryKey: queryKeys.topicList(category),
        queryFn: () => getTopicList(category)
    })
  };
  