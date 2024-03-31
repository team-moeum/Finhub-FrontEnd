import Link from "next/link";
import Image from "next/image";
import style from "./home.module.css";
import CategoryCard from "../_component/Catergory/CategoryCard";
import MainNav from "../_component/Nav/MainNav";
import HomeContent from "../_component/Catergory/HomeContent";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { queryOptions } from "@/states/server/queryOptions";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryOptions.category);
  await queryClient.prefetchQuery(queryOptions.topicList(1));
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
          <CategoryCard />
          <HydrationBoundary state={dehydratedState}>
            <HomeContent />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
}
