import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import CategoryCard from "../_component/Catergory/CategoryCard";
import HomeContent from "../_component/Catergory/HomeContent";
import MainNav from "../_component/Nav/MainNav";
import style from "./home.module.css";

import { getSsrBannerList } from "@/states/server/Home/getBannerList";
import { getSsrCategory } from "@/states/server/Home/getCategory";
import { getSsrTopicList } from "@/states/server/Home/getTopicList";
import { queryKeys } from "@/states/server/queries";

import { Category } from "@/model/Category";

import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container";
import { Text } from "@/components/Text";

export const dynamic = "force-dynamic";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.category,
    queryFn: () => getSsrCategory()
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.banner,
    queryFn: () => getSsrBannerList()
  });

  const firstCategory = queryClient.getQueryData(queryKeys.category) as Category[];
  const firstCategoryId = firstCategory ? firstCategory[0]?.categoryId : -1;
  await queryClient.prefetchQuery({
    queryKey: queryKeys.topicList(firstCategoryId),
    queryFn: () => getSsrTopicList(firstCategoryId)
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <AppContainer footer>
      <MainNav />
      <Box padding="0 16px 24px 16px" backgroundColor="#50BF50">
        <Link href="/search" className={style.inputLinkBox}>
          <Image src="/icons/search.svg" alt="input search icon" width={24} height={24} />
          <Text color="#CDD1D5" size={14} weight={400} lineHeight={1.5}>
            찾고 싶은 단어를 입력해주세요.
          </Text>
        </Link>
      </Box>
      <HydrationBoundary state={dehydratedState}>
        <Box mt={26} mb={32}>
          <CategoryCard />
          <Container>
            <HomeContent />
          </Container>
        </Box>
      </HydrationBoundary>
    </AppContainer>
  );
}
