import React, { Suspense } from 'react';
import Loading from '@/app/loading';
import { QuizPageScreen } from './_component/QuizPageScreen';
import MainNav from '@/app/_component/Nav/MainNav';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import moment from 'moment';
import { getSolvedQuiz } from '@/states/server/Feed/Quiz/getSolvedQuiz';
import { queryKeys } from '@/states/server/queries';
import { getMissedQuiz } from '@/states/server/Feed/Quiz/getMissedQuiz';
import { isUserLoginSsr } from '@/utils/auth_server';

export default async function QuizPage() {
  const isLogin = isUserLoginSsr();
  const requestDate = moment().format("YYYYMMDD");
  
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.missedQuiz(requestDate, 3),
    queryFn: () => getMissedQuiz(requestDate, 3, true),
    initialPageParam: requestDate,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].targetDate,
    pages: 1,
  })
  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.solvedQuiz("Y", requestDate, 3),
    queryFn: () => getSolvedQuiz("Y", requestDate, 3, true),
    initialPageParam: requestDate,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].targetDate,
    pages: 1,
  })
  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.solvedQuiz("N", requestDate, 3),
    queryFn: () => getSolvedQuiz("N", requestDate, 3, true),
    initialPageParam: requestDate,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].targetDate,
    pages: 1,
  })

  const dehydratedState = dehydrate(queryClient);
  
  return ( 
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<Loading />}>
        <MainNav color='white' />
        <QuizPageScreen isLogin={isLogin}/>
      </Suspense>
    </HydrationBoundary>
  );
}


