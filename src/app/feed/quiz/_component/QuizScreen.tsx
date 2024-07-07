import { Suspense } from "react";
import QuizHeader from "./QuizHeader";
import Loading from "@/app/loading";
import TodayQuiz from "./TodayQuiz";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { queryKeys } from "@/states/server/queries";
import { getSsrQuiz } from "@/states/server/Feed/Quiz/getQuiz";

export default async function QuizScreen() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.quiz(),
    queryFn: () => getSsrQuiz()
  })

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <QuizHeader />
      <Suspense fallback={<Loading height={200} />}>
        <TodayQuiz />
      </Suspense>
    </HydrationBoundary>
  )
}