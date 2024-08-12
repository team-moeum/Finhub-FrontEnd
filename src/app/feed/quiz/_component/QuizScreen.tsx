import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

import Loading from "@/app/loading";

import QuizHeader from "./QuizHeader";
import TodayQuiz from "./TodayQuiz";

import { getSsrQuiz } from "@/states/server/Feed/Quiz/getQuiz";
import { queryKeys } from "@/states/server/queries";

export default async function QuizScreen() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.quiz(),
    queryFn: () => getSsrQuiz()
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <QuizHeader />
      <Suspense fallback={<Loading height={200} />}>
        <TodayQuiz />
      </Suspense>
    </HydrationBoundary>
  );
}
