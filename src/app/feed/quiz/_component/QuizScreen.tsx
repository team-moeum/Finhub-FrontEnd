'use client';
import { Suspense } from "react";
import QuizHeader from "./QuizHeader";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const TodayQize = dynamic(() => import('./TodayQize'), { ssr: false })

export const QuizScreen = () => {
  return (
    <>
      <QuizHeader />
      <Suspense fallback={<Loading height={200} />}>
        <TodayQize />
      </Suspense>
    </>
  )
}