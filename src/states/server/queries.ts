import { QueryOptionType, QueryOptionsType } from "./type"
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query"

import { Topic } from "@/model/Topic"
import { Banner } from "@/model/Banner"
import { Category } from "@/model/Category"
import { getCategory } from "./Post/getCategory"
import { getTopicList } from "./Post/getTopicList"
import { getTotalList } from "./List/getTotalList"
import { getBannerList } from "./Post/getBannerList"

export const queryKeys = {
  category: ['category'],
  banner: ['banner'],
  topicList: (categoryId: number) => ["topicList", categoryId.toString()],
  totalList: (categoryId: number) => ["totalList", categoryId.toString()],
  scrap: ["scrap"],
}

export const queryOptions: QueryOptionsType = {
  category: () => ({
    queryKey: queryKeys.category,
    queryFn: () => getCategory(),
  }),
  banner: () => ({
    queryKey: queryKeys.banner,
    queryFn: () => getBannerList()
  }),
  topicList: (categoryId: number) => ({
    queryKey: queryKeys.topicList(categoryId),
    queryFn: () => getTopicList(categoryId)
  }),
  totalList: (categoryId: number) => ({
    queryKey: queryKeys.totalList(categoryId),
    queryFn: () => getTotalList(categoryId)
  }),
};

const useBaseSuspenseQuery = <T = unknown>(
  queryOption: QueryOptionType<T>, 
  options?:  Omit<UseSuspenseQueryOptions<T, Error, any>, "queryKey">
  ) => {
  const timeOption = {staleTime: 60 * 1000, gcTime: 300 * 1000};

  return useSuspenseQuery<any, Error, T, any>({
    queryKey: queryOption.queryKey,
    queryFn: queryOption.queryFn,
    ...timeOption,
    ...options,
  });
};

export const useCategory = () => useBaseSuspenseQuery<Category[]>(queryOptions.category());
export const useBannerList = () => useBaseSuspenseQuery<Banner[]>(queryOptions.banner());
export const useTopicList = (categoryId: number) => useBaseSuspenseQuery<Topic[]>(queryOptions.topicList(categoryId));
export const useTotalList = (categoryId: number) => useBaseSuspenseQuery<Topic[]>(queryOptions.totalList(categoryId));