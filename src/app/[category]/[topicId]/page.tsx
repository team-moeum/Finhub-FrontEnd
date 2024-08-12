import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { Suspense } from "react";

import PostScreen from "@/app/_component/Post/PostScreen";
import Loading from "@/app/loading";

import { getSsrNextTopic } from "@/states/server/Home/getNextTopic";
import { getSsrTopicInfo } from "@/states/server/List/getTopicInfo";
import { getSsrUserTypeList } from "@/states/server/List/getUserTypeList";
import { queryKeys } from "@/states/server/queries";

export const metadata: Metadata = {
  title: "Post"
};

export default async function PostPage({
  params
}: {
  params: { category: string; topicId: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userTypeList,
    queryFn: () => getSsrUserTypeList()
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.topicInfo(Number(params.topicId)),
    queryFn: () => getSsrTopicInfo(Number(params.topicId))
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.nextTopic(Number(params.category), Number(params.topicId)),
    queryFn: () => getSsrNextTopic(Number(params.category), Number(params.topicId))
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<Loading height="100%" />}>
        <PostScreen categoryId={Number(params.category)} topicId={Number(params.topicId)} />
      </Suspense>
    </HydrationBoundary>
  );
}
