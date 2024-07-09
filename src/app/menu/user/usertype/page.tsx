import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { UserTypeScreen } from "./_component/UserTypeScreen";
import { queryKeys } from "@/states/server/queries";
import { getSsrUserTypeList } from "@/states/server/List/getUserTypeList";

export const dynamic = "force-dynamic";

export default async function UserTypePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.userTypeList,
    queryFn: () => getSsrUserTypeList(),
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <UserTypeScreen />
    </HydrationBoundary>
  )
}