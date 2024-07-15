import MenuHeader from "../../_component/Menu/MenuHeader";
import { AppContainer, Container } from "@/components/Container";
import ScrapContent from "./_component/ScrapContent";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { queryKeys } from "@/states/server/queries";
import { getSsrMyScrap } from "@/states/server/Menu/getMyScrap";
import { AppBar } from "@/components/AppBar";

export const dynamic = "force-dynamic";

export default async function ScrapPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.myScrap("topic"),
    queryFn: () => getSsrMyScrap("topic"),
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.myScrap("column"),
    queryFn: () => getSsrMyScrap("column"),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AppContainer>
        <AppBar 
          useLeftBack
          title="스크랩"
        />
        <Container pb={30}>
          <ScrapContent />
        </Container>
      </AppContainer>
    </HydrationBoundary>
  )
}