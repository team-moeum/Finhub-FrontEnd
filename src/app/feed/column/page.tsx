import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import ColumnCard from "./_component/ColumnCard";
import DetailButton from "./_component/DetailButton";

import { getSsrGptColumnList } from "@/states/server/Column/ColumnPost/getGptColumnList";
import { getSsrUserInfo } from "@/states/server/User/getUserInfo";
import { queryKeys } from "@/states/server/queries";

import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";

export default async function ColumnPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userInfo,
    queryFn: () => getSsrUserInfo()
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.gptColumnList(1, 5),
    queryFn: () => getSsrGptColumnList(1, 5),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const nextPage = lastPage.pageInfo.currentPage + 1;
      return nextPage < lastPage.pageInfo.totalPages ? nextPage : undefined;
    },
    pages: 1
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <Container pt={10} pb={20}>
        <Text size={18} weight={700} color="#000">
          GPT 칼럼
        </Text>
        <Box mt={20}>
          <ColumnCard />
          <DetailButton />
        </Box>
      </Container>
    </HydrationBoundary>
  );
}
