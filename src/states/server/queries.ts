import { QueryOptionType, QueryOptionsType } from "./type"
import { useInfiniteQuery, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query"

import { Topic } from "@/model/Topic"
import { Banner } from "@/model/Banner"
import { UserType } from "@/model/UserType"
import { Category } from "@/model/Category"
import { TopicInfo } from "@/model/TopicInfo"
import { UserAvatar } from "@/model/UserAvatar"
import { TopicGptInfo } from "@/model/TopicGptInfo"
import { MyColumnScarp, MyScrap, MyScrapRequest, MyTopicScarp } from "@/model/MyScrap"
import { PopularKeyword } from "@/model/PopularKeyword"

import { getMyScrap } from "./Menu/getMyScrap"
import { getAnnounce } from "./Menu/getAnnounce"
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

import { getGptColumnList } from "./Column/ColumnPost/getGptColumnList";
import { gptColumn, gptColumnDetail, gptColumnComment } from "@/model/GptColumn";
import { getGptColumnDetail } from "./Column/ColumnPost/getGptColumnDetail"
import { getGptColumnComment } from "./Column/ColumnComment/getGptColumnComment"

import { getNextTopic } from "./Home/getNextTopic"
import { NextTopic } from "@/model/NextTopic"
import { getSearchGptColumn } from "./Search/getSearchGptColumn"


export const queryKeys = {
  category: ['category'],
  banner: ['banner'],
  topicList: (categoryId: number) => ["topicList", categoryId?.toString()],
  totalList: (categoryId: number) => ["totalList", categoryId.toString()],
  scrap: ["scrap"],
  topicInfo: (topicId: number) => ["topicInfo", topicId.toString()],
  topicGptInfo: (topicId: number, userTypeId: number) => ["topicGptInfo", topicId.toString(), userTypeId.toString()],
  nextTopic: (categoryId: number, topicId: number) => ["nextTopic", categoryId.toString(), topicId.toString()],
  userTypeList: ["userTypeList"],
  userAvatarList: ["userAvatarList"],
  popularKeywordList: ["popularKeywordList"],
  searchTopic: (type: "title" | "summary" | "both", keyword: string) => ['search', 'topic', type, keyword],
  searchGptColumn: (type: "title" | "summary" | "both", keyword: string) => ['search', 'column', type, keyword],
  gptColumnList: (page: number, size?: number) => ["gptColumn", page.toString(), size?.toString() || ""],
  gptColumnDetail: (id: number) => ["gptColumnDetail", id.toString()], 
  gptColumnComment: (id: number, type: number) => ["gptColumnComment", id.toString(), type.toString()|| ""],
  announce: (cursorId?: number, size?: number) => ['announce', cursorId?.toString() || "", size?.toString() || ""],
  myScrap: (type: MyScrapRequest) => ["myScrap", type]
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
  nextTopic: (categoryId: number, topicId: number) => ({
    queryKey: queryKeys.nextTopic(categoryId, topicId),
    queryFn: () => getNextTopic(categoryId, topicId)
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
  }),
  gptColumnList: (page: number, size?: number) => ({
    queryKey: queryKeys.gptColumnList(page, size),
    queryFn: () => getGptColumnList(page, size)
  }),
  gptColumnDetail: (id: number) => ({
    queryKey: queryKeys.gptColumnDetail(id),
    queryFn: () => getGptColumnDetail(id)
  }),
  gptColumnComment: (id: number, type: number, page?: number, size?: number) => ({
    queryKey: queryKeys.gptColumnComment(id, type),
    queryFn: () => getGptColumnComment(id, type, page, size)
  }),
  announce: (cursorId?: number, size?: number) => ({
    queryKey: queryKeys.announce(cursorId, size),
    queryFn: () => getAnnounce(cursorId, size)
  }),
  myScrap: (type: MyScrapRequest) => ({
    queryKey: queryKeys.myScrap(type),
    queryFn: () => getMyScrap(type)
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
export const useNextTopic = (categoryId: number, topicId: number) => useBaseSuspenseQuery<NextTopic>(queryOptions.nextTopic(categoryId, topicId));
export const useTopicInfo = (topicId: number) => useBaseSuspenseQuery<TopicInfo>(queryOptions.topicInfo(topicId));
export const useTopicGptInfo = (categoryId: number, topicId: number, userTypeId: number) => useBaseSuspenseQuery<TopicGptInfo>(queryOptions.topicGptInfo(categoryId, topicId, userTypeId));
export const useUserTypeList = () => useBaseSuspenseQuery<UserType[]>(queryOptions.userTypeList());
export const useUserAvatarList = () => useBaseSuspenseQuery<UserAvatar[]>(queryOptions.userAvatarList());
export const usePopularKeywordList = () => useBaseSuspenseQuery<{date: string, popularSearchList: PopularKeyword[]}>(queryOptions.popularKeywordList());
export const useGptColumnDetail = (columnId: number) => useBaseSuspenseQuery<gptColumnDetail>(queryOptions.gptColumnDetail(columnId));
export const useGptColumnComment = (columnId: number, commentType: number) => useBaseSuspenseQuery<gptColumnComment>(queryOptions.gptColumnDetail(columnId, commentType));
export const useMyScrap = (type: MyScrapRequest) => useBaseSuspenseQuery<MyTopicScarp[] | MyColumnScarp[]>(queryOptions.myScrap(type));

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

export const useSearchGptColumn = ({type, keyword, page}: UseSearchProps) => {
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

type UseGptColumnListProps = {
  page: number,
  size?: number
}
export const useGptColumnList = ({page, size}: UseGptColumnListProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.gptColumnList(page, size),
    queryFn: ({ pageParam = 1 }) => getGptColumnList(pageParam, size),
    initialPageParam: page || 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
}

// type UseGptColumnCommentProps = {
//   id: number,
//   type: number,
//   page?: number,
//   size?: number
// }
// export const useGptColumnComment = ({id, type, page, size}: UseGptColumnCommentProps) => {
//   return useInfiniteQuery({
//     queryKey: queryKeys.gptColumnComment(id, type),
//     queryFn: ({ pageParam = 1 }) => getGptColumnComment(id, type, pageParam, size),
//     initialPageParam: page || 1,
//     getNextPageParam: (lastPage) => {
//       const nextPage = lastPage.pageInfo.currentPage + 1;
//       return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
//     },
//     staleTime: 60 * 1000,
//     gcTime: 300 * 1000,
//   })
// }

type UseAnnounceInfinitQueryProps = {
  cursorId?: number, 
  size?: number
}

export const useAnnounceInfiniteQuery = ({ cursorId, size }: UseAnnounceInfinitQueryProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.announce(cursorId, size),
    queryFn: ({ pageParam = cursorId }) => getAnnounce(pageParam, size),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage[lastPage.length - 1]?.id - 1;
      return nextCursor && nextCursor > 0 ? nextCursor : undefined;
    },
    initialPageParam: cursorId,
    staleTime: 60 * 1000, 
    gcTime: 300 * 1000,
  });
};
