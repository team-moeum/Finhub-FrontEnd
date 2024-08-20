import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { UserPageScreen } from "./_component/UserPageScreen";

import { getSsrUserAvatarList } from "@/states/server/Menu/getUserAvatarList";
import { queryKeys } from "@/states/server/queries";

export const dynamic = "force-dynamic";

export default async function UserPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userAvatarList,
    queryFn: () => getSsrUserAvatarList()
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <UserPageScreen />
    </HydrationBoundary>
  );
}
