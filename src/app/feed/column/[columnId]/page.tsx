import { Suspense } from "react"
import { ColumnDetailScreen } from "./_component/ColumnDetailScreen"
import Loading from "@/app/loading"

export default function ColumnPost() {
  return (
    <Suspense fallback={<Loading />}>
      <ColumnDetailScreen />
    </Suspense>
  )
}