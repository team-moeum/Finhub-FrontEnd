import { QueryOptionType, QueryOptionsType } from "./type"
import { useInfiniteQuery, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query"

import { Topic } from "@/model/Topic"
import { Banner } from "@/model/Banner"
import { Category } from "@/model/Category"
import { TopicInfo } from "@/model/TopicInfo"
import { UserAvatar } from "@/model/UserAvatar"
import { TopicGptInfo } from "@/model/TopicGptInfo"
import { MyColumnScarp, MyScrap, MyScrapRequest, MyTopicScarp } from "@/model/MyScrap"
import { PopularKeyword } from "@/model/PopularKeyword"
import { UserType } from "@/model/UserType"

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

import { getSearchGptColumn } from "./Search/getSearchGptColumn"
import { getQuiz } from "./Feed/Quiz/getQuiz"
import { getMissedQuiz } from "./Feed/Quiz/getMissedQuiz"
import { getSolvedQuiz } from "./Feed/Quiz/getSolvedQuiz"
import { QuizInfo } from "@/model/QuizInfo"
import { getQuizCalender } from "./Feed/Quiz/getQuizCalender"
import { QuizCalenderResponse } from "@/model/QuizCalender"
import { MissedQuiz } from "@/model/missedQuiz"
import { SolvedQuiz } from "@/model/solvedQuiz"

import { getGptColumnList } from "./Column/ColumnPost/getGptColumnList";
import { gptColumn, gptColumnDetail, gptColumnComment, CommentPageInfo } from "@/model/GptColumn";
import { getGptColumnDetail } from "./Column/ColumnPost/getGptColumnDetail"

import { getNextTopic } from "./Home/getNextTopic"
import { NextTopic } from "@/model/NextTopic"
import { getGptColumnCommentList } from "./Column/ColumnComment/getGptColumnComment"
import { getUserInfo } from "./User/getUserInfo"
import { User } from "@/model/User"
import { getReportReasons } from "./Column/ColumnComment/getReportReasons"
import { CommentReportReason } from "@/model/CommentReportReason"


export const queryKeys = {
  userInfo: ['userInfo'],
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
  gptColumnCommentList: (id: number, type: number, page: number, size?: number) => ["gptColumnComment", id.toString(), type.toString()|| "", page.toString(), size?.toString() || ""],
  announce: (cursorId?: number, size?: number) => ['announce', cursorId?.toString() || "", size?.toString() || ""],
  myScrap: (type: MyScrapRequest) => ["myScrap", type],
  reportReasons: ["reportReasons"],

  quiz: (date?: string) => ["quiz", date || ""],
  quizCalendar: (year: string, month: string) => ["quizCalendar", year, month],

  missedQuiz: (date: string, limit?: number) => ["missedQuiz", date, limit?.toString() || ""],
  solvedQuiz: (isCorrect: string, date: string, limit?: number) => ["solvedQuiz", isCorrect, date, limit?.toString() || ""],
}

export const queryOptions: QueryOptionsType = {
  userInfo: () => ({
    queryKey: queryKeys.userInfo,
    queryFn: () => getUserInfo()
  }),
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
  announce: (cursorId?: number, size?: number) => ({
    queryKey: queryKeys.announce(cursorId, size),
    queryFn: () => getAnnounce(cursorId, size)
  }),
  myScrap: (type: MyScrapRequest) => ({
    queryKey: queryKeys.myScrap(type),
    queryFn: () => getMyScrap(type)
  }),
  reportReasons: () => ({
    queryKey: queryKeys.reportReasons,
    queryFn: () => getReportReasons()
  }),

  quiz: (date?: string) => ({
    queryKey: queryKeys.quiz(date),
    queryFn: () => getQuiz(date)
  }),
  quizCalendar: (year: string, month: string) => ({
    queryKey: queryKeys.quizCalendar(year, month),
    queryFn: () => getQuizCalender(year, month)
  }),
  //이거아래지워도 오류안남
  missedQuiz: (date: string, limit?: number) => ({
    queryKey: queryKeys.missedQuiz(date, limit),
    queryFn: () => getMissedQuiz(date, limit)
  }),
  solvedQuiz: (isCorrect: string, date: string, limit?: number) => ({
    queryKey: queryKeys.solvedQuiz(isCorrect, date, limit),
    queryFn: () => getSolvedQuiz(isCorrect, date, limit)
  }),
};

const useBaseSuspenseQuery = <T = unknown>(
  queryOption: QueryOptionType<T>, 
  options?:  Omit<UseSuspenseQueryOptions<T, Error, any>, "queryKey" | 'queryFn'>
  ) => {
  const timeOption = {staleTime: 60 * 1000, gcTime: 300 * 1000};

  return useSuspenseQuery<any, Error, T, any>({
    queryKey: queryOption.queryKey,
    queryFn: queryOption.queryFn,
    ...timeOption,
    ...options,
  });
};

export const useUserInfo = () => useBaseSuspenseQuery<User>({...queryOptions.userInfo()}, {staleTime: 0});
export const useCategory = () => useBaseSuspenseQuery<Category[]>(queryOptions.category());
export const useBannerList = () => useBaseSuspenseQuery<Banner[]>(queryOptions.banner());
export const useTopicList = (categoryId: number) => useBaseSuspenseQuery<Topic[]>(queryOptions.topicList(categoryId));
export const useTotalList = (categoryId: number) => useBaseSuspenseQuery<Topic[]>(queryOptions.totalList(categoryId));
export const useNextTopic = (categoryId: number, topicId: number) => useBaseSuspenseQuery<NextTopic>(queryOptions.nextTopic(categoryId, topicId));
export const useTopicInfo = (topicId: number) => useBaseSuspenseQuery<TopicInfo>(queryOptions.topicInfo(topicId));
export const useTopicGptInfo = (categoryId: number, topicId: number, userTypeId: number) => useBaseSuspenseQuery<TopicGptInfo>(queryOptions.topicGptInfo(categoryId, topicId, userTypeId));
export const useUserTypeList = () => useBaseSuspenseQuery<UserType[]>(queryOptions.userTypeList());
export const useUserAvatarList = () => useBaseSuspenseQuery<UserAvatar[]>(queryOptions.userAvatarList());
export const usePopularKeywordList = () => useBaseSuspenseQuery<{ date: string, popularSearchList: PopularKeyword[] }>(queryOptions.popularKeywordList());
export const useGptColumnDetail = (columnId: number) => useBaseSuspenseQuery<gptColumnDetail>(queryOptions.gptColumnDetail(columnId));
export const useMyScrap = (type: MyScrapRequest) => useBaseSuspenseQuery<MyTopicScarp[] | MyColumnScarp[]>(queryOptions.myScrap(type));
export const useReportReasons = () => useBaseSuspenseQuery<CommentReportReason[]>(queryOptions.reportReasons());


export const useQuizCalendar = (year: string, month: string) => useBaseSuspenseQuery<QuizCalenderResponse>(queryOptions.quizCalendar(year, month))

export const useQuiz = (date?: string) => useBaseSuspenseQuery<QuizInfo>(queryOptions.quiz(date));
export const useMissedQuiz = (date?: string, limit?: number) => useBaseSuspenseQuery<MissedQuiz>(queryOptions.missedQuiz(date, limit));
export const useSolvedQuiz = (isCorrect: string, date: string, limit?: number) => useBaseSuspenseQuery<SolvedQuiz>(queryOptions.solvedQuiz(isCorrect, date, limit));


type UseSearchProps = {
  type: "title" | "summary" | "both",
  keyword: string,
  page: number
}

export const useSearchTopic = ({ type, keyword, page }: UseSearchProps) => {
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

export const useSearchGptColumn = ({ type, keyword, page }: UseSearchProps) => {
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

type useMissedQuizQueryProps = {
  date: string,
  limit?: number,
}

export const useMissedQuizQuery = ({ date, limit }: useMissedQuizQueryProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.missedQuiz(date, limit),
    queryFn: ({ pageParam = date }) => getMissedQuiz(pageParam, limit),
    getNextPageParam: (lastPage) => {
      const lastQuiz = lastPage[lastPage?.length - 1];
      return lastQuiz ? lastPage.targetDate : undefined;
    },
    initialPageParam: date,
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

type UseGptColumnCommentProps = {
  id: number,
  type: number,
  page?: number,
  size?: number
}
export const useGptColumnCommentList = ({id, type, page=1, size=3}: UseGptColumnCommentProps) => {
  return useInfiniteQuery<{comments: gptColumnComment[], pageInfo: CommentPageInfo}>({
    queryKey: queryKeys.gptColumnCommentList(id, type, page || 1, size),
    queryFn: ({ pageParam = 1 }) => getGptColumnCommentList(id, type, pageParam as number, size),
    initialPageParam: page || 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage <= lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    staleTime: 0,
    gcTime: 0,
  })
}

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

type useSolvedQuizQueryProps = {
  isCorrect: string,
  date: string,
  limit?: number,
}
export const useSolvedQuizQuery = ({ isCorrect, date, limit }: useSolvedQuizQueryProps) => {
  return useInfiniteQuery({
    queryKey: queryKeys.solvedQuiz(isCorrect, date, limit),
    queryFn: ({ pageParam = date }) => getSolvedQuiz(isCorrect, pageParam, limit),
    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      const lastQuiz = lastPage[lastPage?.length - 1];
      return lastQuiz ? lastQuiz : undefined;
    },
    initialPageParam: date,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
}