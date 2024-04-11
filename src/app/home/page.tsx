import Link from "next/link";
import Image from "next/image";
import style from "./home.module.css";

import MainNav from "../_component/Nav/MainNav";
import HomeContent from "../_component/Catergory/HomeContent";
import CategoryCard from "../_component/Catergory/CategoryCard";

import { queryKeys } from "@/states/server/queries";
import { getCategory } from "@/states/server/Post/getCategory";
import { getTopicList } from "@/states/server/Post/getTopicList";
import { getBannerList } from "@/states/server/Post/getBannerList";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.category,
    queryFn: () => getCategory(true), // ssr true
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.banner,
    queryFn: () => getBannerList(true),
  });
  await queryClient.prefetchQuery({
    queryKey: queryKeys.topicList(1),
    queryFn: () => getTopicList(1, true),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.container}>
      <MainNav />
      <div className={style.top_area}>
          <Link href="/search" className={style.inputLinkBox}>
            <Image
              src='/icons/search.svg'
              alt='input search icon'
              width={24}
              height={24}
            />
            <span>찾고 싶은 단어를 입력해주세요.</span>
          </Link>
      </div>
      <div className={style.content_area}>
        <div className={style.category_container}>
          <HydrationBoundary state={dehydratedState}>
            <CategoryCard />
            <HomeContent />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
}
