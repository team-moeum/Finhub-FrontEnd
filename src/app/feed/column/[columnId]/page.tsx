import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

import Loading from "@/app/loading";

import { ColumnDetailScreen } from "./_component/ColumnDetailScreen";

import { getSsrGptColumnCommentList } from "@/states/server/Column/ColumnComment/getGptColumnComment";
import { getSsrGptColumnDetail } from "@/states/server/Column/ColumnPost/getGptColumnDetail";
import { queryKeys } from "@/states/server/queries";

export default async function ColumnPost({ params }: { params: { columnId: string } }) {
  const columnId = Number(params.columnId);

  const queryClient = new QueryClient();

  await Promise.all([
    await queryClient.prefetchQuery({
      queryKey: queryKeys.gptColumnDetail(columnId),
      queryFn: () => getSsrGptColumnDetail(columnId)
    }),
    await queryClient.prefetchInfiniteQuery({
      queryKey: queryKeys.gptColumnCommentList(columnId, 1, 1, 3),
      queryFn: () => getSsrGptColumnCommentList(columnId, 1, 1, 3),
      initialPageParam: 1,
      getNextPageParam: lastPage => {
        const nextPage = lastPage.pageInfo.currentPage + 1;
        return nextPage <= lastPage.pageInfo.totalPages ? nextPage : undefined;
      },
      pages: 1
    }),
    await queryClient.prefetchInfiniteQuery({
      queryKey: queryKeys.gptColumnCommentList(columnId, 2, 1, 3),
      queryFn: () => getSsrGptColumnCommentList(columnId, 2, 1, 3),
      initialPageParam: 1,
      getNextPageParam: lastPage => {
        const nextPage = lastPage.pageInfo.currentPage + 1;
        return nextPage <= lastPage.pageInfo.totalPages ? nextPage : undefined;
      },
      pages: 1
    })
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<Loading />}>
        <ColumnDetailScreen />
      </Suspense>
    </HydrationBoundary>
  );
}
