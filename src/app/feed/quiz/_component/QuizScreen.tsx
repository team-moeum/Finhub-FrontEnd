'use client';
import { Suspense } from "react";
import QuizHeader from "./QuizHeader";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const TodayQuiz = dynamic(() => import('./TodayQuiz'), { ssr: false })

export const QuizScreen = () => {
  return (
    <>
      <QuizHeader />
      <Suspense fallback={<Loading height={200} />}>
        <TodayQuiz />
      </Suspense>
    </>
  )
}