import { getTotalList } from "./List/getTotalList";
import { getBannerList } from "./Post/getBannerList";
import { getCategory } from "./Post/getCategory";
import { getTopicList } from "./Post/getTopicList";
import { postScrap } from "./Post/postScrap";

export const queryKeys = {
  category: ['category'],
  banner: ['banner'],
  topicList: (categoryId: number) => ["topicList", `${categoryId}`],
  totalList: (categoryId: number) => ["totalList", `${categoryId}`],
}

export const queryOptions = {
  category: {
    queryKey: queryKeys.category,
    queryFn: () => getCategory()
  },
  banner: {
    queryKey: queryKeys.banner,
    queryFn: () => getBannerList()
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

export const mutationOptions = {
  scrap: (topicId: number) => ({
    onMutate: async () => postScrap(topicId),
  }),
};

