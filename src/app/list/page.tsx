import style from './List.module.css';

import ListContent from '../home/_component/ListContent';

import { queryKeys } from '@/states/server/queries';
import { getCategory } from '@/states/server/Post/getCategory';
import { getTotalList } from '@/states/server/List/getTotalList';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export default async function ListPage({searchParams}: {searchParams: {categoryId: string}}) {
  const categoryId = searchParams.categoryId ? Number(searchParams.categoryId) : 1;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.category,
    queryFn: () => getCategory(true)
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.totalList(1),
    queryFn: () => getTotalList(1, true)
  });
  const dehydratedState = dehydrate(queryClient);
  
  return (
    <div className={style.container}>
      <p className={style.title}>목록</p>
      <HydrationBoundary state={dehydratedState}>
        <ListContent categoryId={categoryId}/>
      </HydrationBoundary>
    </div>
  )
}