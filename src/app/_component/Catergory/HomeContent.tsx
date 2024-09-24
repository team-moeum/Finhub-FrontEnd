"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import Loading from "@/app/loading";

import CategoryItemList from "./CatergoryItemList";
import LoginModalContent from "./LoginModalContent";
import TopicList from "./TopicList";

import { activeCategory } from "@/states/client/atoms/activeCategory";
import { activeLoginModal } from "@/states/client/atoms/activeLoginModal";
import { useCategory } from "@/states/server/queries";

import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { FlexRow } from "@/components/FlexRow";
import { Text } from "@/components/Text";

export default function HomeContent() {
  const [activeItem, setActiveItem] = useRecoilState(activeCategory);
  const [activeLogin, setActiveLogin] = useRecoilState(activeLoginModal);

  const { data: categoryList } = useCategory();

  useEffect(() => {
    if (categoryList.length > 0) setActiveItem(categoryList[0]);
  }, [categoryList]);

  return (
    <Container variant="full">
      <Box mt={9}>
        <FlexRow alignItems="flex-start">
          <Box mb={20}>
            <Text size={20} weight={600} color="#25292C">
              카테고리
            </Text>
          </Box>
          <Link href={`/list?categoryId=${activeItem.categoryId}`}>
            <Text size={15} weight={500} color="#50BF50">
              <Text weight={700}>&apos;{activeItem.name}&apos;</Text> 토픽 전체 보기
            </Text>
            <Image
              src="/icons/arrow_right_green.svg"
              alt="arrow right icon"
              width={14}
              height={10}
            />
          </Link>
        </FlexRow>
        <CategoryItemList />
      </Box>

      <Box mt={15} mb={24}>
        <Suspense fallback={<Loading height={200} />}>
          <TopicList activeItem={activeItem} />
        </Suspense>
      </Box>

      <AnimatePresence>
        {activeLogin && (
          <BottomSheet isOpen={true} onClose={() => setActiveLogin(false)}>
            <LoginModalContent onClose={() => setActiveLogin(false)} />
          </BottomSheet>
        )}
      </AnimatePresence>
    </Container>
  );
}
