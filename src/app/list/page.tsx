import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import ListContent from '../home/_component/ListContent';
import style from './List.module.css';
import { queryOptions } from '@/states/server/queryOptions';

export default async function ListPage({searchParams}: {searchParams: {categoryId: string}}) {
  const categoryId = searchParams.categoryId ? Number(searchParams.categoryId) : 1;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryOptions.category);
  await queryClient.prefetchQuery(queryOptions.totalList(1));
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