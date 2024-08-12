import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import ListContent from "../home/_component/ListContent";
import style from "./List.module.css";

import { getSsrCategory } from "@/states/server/Home/getCategory";
import { getSsrTotalList } from "@/states/server/List/getTotalList";
import { queryKeys } from "@/states/server/queries";

import { Category } from "@/model/Category";

import { AppContainer } from "@/components/Container";

export default async function ListPage({ searchParams }: { searchParams: { categoryId: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.category,
    queryFn: () => getSsrCategory()
  });

  const firstCategory = queryClient.getQueryData(queryKeys.category) as Category[];
  const firstCategoryId = firstCategory ? firstCategory[0]?.categoryId : -1;
  const categoryId = searchParams.categoryId ? Number(searchParams.categoryId) : firstCategoryId;

  await queryClient.prefetchQuery({
    queryKey: queryKeys.totalList(categoryId),
    queryFn: () => getSsrTotalList(categoryId)
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <AppContainer footer>
      <p className={style.title}>목록</p>
      <HydrationBoundary state={dehydratedState}>
        <ListContent categoryId={categoryId} />
      </HydrationBoundary>
    </AppContainer>
  );
}
