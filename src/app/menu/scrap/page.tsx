import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import MenuHeader from "../../_component/Menu/MenuHeader";
import ScrapContent from "./_component/ScrapContent";

import { getSsrMyScrap } from "@/states/server/Menu/getMyScrap";
import { queryKeys } from "@/states/server/queries";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export const dynamic = "force-dynamic";

export default async function ScrapPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.myScrap("topic"),
    queryFn: () => getSsrMyScrap("topic")
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.myScrap("column"),
    queryFn: () => getSsrMyScrap("column")
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AppContainer>
        <AppBar useLeftBack title="스크랩" />
        <Container pb={30}>
          <ScrapContent />
        </Container>
      </AppContainer>
    </HydrationBoundary>
  );
}
