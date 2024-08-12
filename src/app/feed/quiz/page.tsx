import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import moment from "moment";
import React, { Suspense } from "react";

import MainNav from "@/app/_component/Nav/MainNav";
import Loading from "@/app/loading";

import { QuizPageScreen } from "./_component/QuizPageScreen";

import { getSsrMissedQuiz } from "@/states/server/Feed/Quiz/getMissedQuiz";
import { getSsrQuizCalender } from "@/states/server/Feed/Quiz/getQuizCalender";
import { getSsrSolvedQuiz } from "@/states/server/Feed/Quiz/getSolvedQuiz";
import { queryKeys } from "@/states/server/queries";

import { isUserLoginSsr } from "@/utils/auth_server";

export default async function QuizPage() {
  const requestDate = moment().format("YYYYMMDD");
  const currentYear = moment().format("YYYY");
  const currentMonth = moment().format("MM");

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: queryKeys.quizCalendar(currentYear, currentMonth),
      queryFn: () => getSsrQuizCalender(currentYear, currentMonth)
    }),
    queryClient.prefetchInfiniteQuery({
      queryKey: queryKeys.missedQuiz(requestDate, 3),
      queryFn: () => getSsrMissedQuiz(requestDate, 3),
      initialPageParam: requestDate,
      getNextPageParam: lastPage => lastPage[lastPage.length - 1].targetDate,
      pages: 1
    }),
    queryClient.prefetchInfiniteQuery({
      queryKey: queryKeys.solvedQuiz("Y", requestDate, 3),
      queryFn: () => getSsrSolvedQuiz("Y", requestDate, 3),
      initialPageParam: requestDate,
      getNextPageParam: lastPage => lastPage[lastPage.length - 1].targetDate,
      pages: 1
    }),
    queryClient.prefetchInfiniteQuery({
      queryKey: queryKeys.solvedQuiz("N", requestDate, 3),
      queryFn: () => getSsrSolvedQuiz("N", requestDate, 3),
      initialPageParam: requestDate,
      getNextPageParam: lastPage => lastPage[lastPage.length - 1].targetDate,
      pages: 1
    })
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<Loading />}>
        <MainNav color="white" />
        <QuizPageScreen />
      </Suspense>
    </HydrationBoundary>
  );
}
