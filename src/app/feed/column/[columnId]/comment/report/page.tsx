import { Suspense } from "react";
import { ReportCommentScreen } from "./_component/ReportCommentScreen";
import Loading from "@/app/loading";

export default function ReportCommentPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ReportCommentScreen />
    </Suspense>
  )
}