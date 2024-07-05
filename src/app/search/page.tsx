import { Metadata } from "next";
import React from "react";

import SearchScreen from "./_component/SearchScreen";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getSsrPopularKeywordList } from "@/states/server/Search/getPopularKeywordList";
import { queryKeys } from "@/states/server/queries";

export const metadata: Metadata = {
  title: "Search",
};

export default async function SearchPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.popularKeywordList,
    queryFn: () => getSsrPopularKeywordList(),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <SearchScreen />
    </HydrationBoundary>
  )
}
