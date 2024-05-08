import { QueryOptionType, QueryOptionsType } from "./type"
import { useInfiniteQuery, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query"

import { Topic } from "@/model/Topic"
import { Banner } from "@/model/Banner"
import { UserType } from "@/model/UserType"
import { Category } from "@/model/Category"
import { TopicInfo } from "@/model/TopicInfo"
import { UserAvatar } from "@/model/UserAvatar"
import { TopicGptInfo } from "@/model/TopicGptInfo"
import { PopularKeyword } from "@/model/PopularKeyword"

import { getCategory } from "./Home/getCategory"
import { getTopicInfo } from "./List/getTopicInfo"
import { getTopicList } from "./Home/getTopicList"
import { getTotalList } from "./List/getTotalList"
import { getBannerList } from "./Home/getBannerList"
import { getSearchTopic } from "./Search/getSearchTopic"
import { getTopicGptInfo } from "./List/getTopicGptInfo"
import { getUserTypeList } from "./List/getUserTypeList"
import { getUserAvatarList } from "./Menu/getUserAvatarList"
import { getPopularKeywordList } from "./Search/getPopularKeywordList"
import { getSearchGptColumn } from "./Search/getSearchGptColumn"

export const queryKeys = {
  category: ['category'],
  banner: ['banner'],
  topicList: (categoryId: number) => ["topicList", categoryId.toString()],
  totalList: (categoryId: number) => ["totalList", categoryId.toString()],
  scrap: ["scrap"],
  topicInfo: (topicId: number) => ["topicInfo", topicId.toString()],
  topicGptInfo: (topicId: number, userTypeId: number) => ["topicGptInfo", topicId.toString(), userTypeId.toString()],
  userTypeList: ["userTypeList"],
  userAvatarList: ["userAvatarList"],
  popularKeywordList: ["popularKeywordList"],
  searchTopic: (type: "title" | "summary" | "both", keyword: string) => ['search', 'topic', type, keyword],
  searchGptColumn: (type: "title" | "summary" | "both", keyword: string) => ['search', 'column', type, keyword],
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
  topicInfo: (topicId: number) => ({
    queryKey: queryKeys.topicInfo(topicId),
    queryFn: () => getTopicInfo(topicId)
  }),
  topicGptInfo: (categoryId: number, topicId: number, userTypeId: number) => ({
    queryKey: queryKeys.topicGptInfo(topicId, userTypeId),
    queryFn: () => getTopicGptInfo(categoryId, topicId, userTypeId)
  }),
  userTypeList: () => ({
    queryKey: queryKeys.userTypeList,
    queryFn: () => getUserTypeList()
  }),
  userAvatarList: () => ({
    queryKey: queryKeys.userAvatarList,
    queryFn: () => getUserAvatarList()
  }),
  popularKeywordList: () => ({
    queryKey: queryKeys.popularKeywordList,
    queryFn: () => getPopularKeywordList(),
  }),
  searchTopic: (type: "title" | "summary" | "both", keyword: string, page: number) => ({
    queryKey: queryKeys.searchTopic(type, keyword),
    queryFn: () => getSearchTopic(type, keyword, page)
  }),
  searchGptColumn: (type: "title" | "summary" | "both", keyword: string, page: number) => ({
    queryKey: queryKeys.searchGptColumn(type, keyword),
    queryFn: () => getSearchGptColumn(type, keyword, page)
  })
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
export const useTopicInfo = (topicId: number) => useBaseSuspenseQuery<TopicInfo>(queryOptions.topicInfo(topicId));
export const useTopicGptInfo = (categoryId: number, topicId: number, userTypeId: number) => useBaseSuspenseQuery<TopicGptInfo>(queryOptions.topicGptInfo(categoryId, topicId, userTypeId));
export const useUserTypeList = () => useBaseSuspenseQuery<UserType[]>(queryOptions.userTypeList());
export const useUserAvatarList = () => useBaseSuspenseQuery<UserAvatar[]>(queryOptions.userAvatarList());
export const usePopularKeywordList = () => useBaseSuspenseQuery<{date: string, popularSearchList: PopularKeyword[]}>(queryOptions.popularKeywordList());

/** useInfiniteQuery */
type UseSearchProps = {
  type: "title" | "summary" | "both", 
  keyword: string, 
  page: number
}

export const useSearchTopic = ({type, keyword, page}: UseSearchProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.searchTopic(type, keyword),
    queryFn: ({ pageParam = 0 }) => getSearchTopic(type, keyword, pageParam),
    initialPageParam: page || 0,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: keyword !== ''
  })
}

export const UseSearchGptColumn = ({type, keyword, page}: UseSearchProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.searchGptColumn(type, keyword),
    queryFn: ({ pageParam = 0 }) => getSearchGptColumn(type, keyword, pageParam),
    initialPageParam: page || 0,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: keyword !== ''
  })
}