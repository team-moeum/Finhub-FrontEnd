import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import ColumnCard from "./_component/ColumnCard";
import DetailButton from "./_component/DetailButton";
import style from "./ColumnPage.module.css"
import { queryKeys } from "@/states/server/queries";
import { getSsrUserInfo } from "@/states/server/User/getUserInfo";
import { getSsrGptColumnList } from "@/states/server/Column/ColumnPost/getGptColumnList";

export default async function ColumnPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userInfo,
    queryFn: () => getSsrUserInfo(),
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.gptColumnList(1, 5),
    queryFn: () => getSsrGptColumnList(1, 5),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    pages: 1,
  })

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