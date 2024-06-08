import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import ColumnCard from "./_component/ColumnCard";
import DetailButton from "./_component/DetailButton";
import style from "./ColumnPage.module.css"
import { queryKeys } from "@/states/server/queries";
import { getUserInfo } from "@/states/server/User/getUserInfo";

export default async function ColumnPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userInfo,
    queryFn: () => getUserInfo(true),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={style.card_container}>
        <h3>GPT 칼럼</h3>
        <ColumnCard />
        <DetailButton />
      </div>
    </HydrationBoundary>
  )
}