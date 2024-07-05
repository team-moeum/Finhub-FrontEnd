import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { UserPageScreen } from "./_component/UserPageScreen";
import { queryKeys } from "@/states/server/queries";
import { getSsrUserAvatarList } from "@/states/server/Menu/getUserAvatarList";

export default async function UserPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userAvatarList,
    queryFn: () => getSsrUserAvatarList(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <UserPageScreen />
    </HydrationBoundary>
  )
}