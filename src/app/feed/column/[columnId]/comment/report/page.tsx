import { Suspense } from "react";

import Loading from "@/app/loading";

import { ReportCommentScreen } from "./_component/ReportCommentScreen";

export default function ReportCommentPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ReportCommentScreen />
    </Suspense>
  );
}
