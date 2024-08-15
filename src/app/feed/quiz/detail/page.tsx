import React, { Suspense } from "react";

import Loading from "@/app/loading";

import { QuizDetailScreen } from "./_component/QuizDetailScreen";

export default function QuizDetailPage() {
  return (
    <Suspense fallback={<Loading />}>
      <QuizDetailScreen />
    </Suspense>
  );
}
