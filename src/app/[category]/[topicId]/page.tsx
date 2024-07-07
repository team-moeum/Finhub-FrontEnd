import { Metadata } from "next";
import { Suspense } from "react";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import Loading from "@/app/loading";
import PostScreen from "@/app/_component/Post/PostScreen";
import { queryKeys } from "@/states/server/queries";
import { getSsrUserTypeList } from "@/states/server/List/getUserTypeList";
import { getSsrTopicInfo } from "@/states/server/List/getTopicInfo";
import { getSsrNextTopic } from "@/states/server/Home/getNextTopic";

export const metadata: Metadata = {
  title: "Post",
};

export default async function PostPage({ params }: { params: { category: string, topicId: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userTypeList,
    queryFn: () => getSsrUserTypeList(),
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.topicInfo(Number(params.topicId)),
    queryFn: () => getSsrTopicInfo(Number(params.topicId)),
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.nextTopic(Number(params.category), Number(params.topicId)),
    queryFn: () => getSsrNextTopic(Number(params.category), Number(params.topicId)), 
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<Loading height='100%'/>}>
        <PostScreen categoryId={Number(params.category)} topicId={Number(params.topicId)}/>
     </Suspense>
    </HydrationBoundary>
  )
}