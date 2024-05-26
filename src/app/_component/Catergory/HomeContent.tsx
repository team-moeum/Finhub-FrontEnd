"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState } from "recoil";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion';

import { activeCategory } from "@/states/client/atoms/activeCategory"
import { activeLoginModal } from '@/states/client/atoms/activeLoginModal';

import { Box } from '@/components/Box';
import { Text } from '@/components/Text';
import { FlexRow } from '@/components/FlexRow';
import { Container } from '@/components/Container';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';

import Loading from '@/app/loading';
import TopicList from "./TopicList";
import CategoryItemList from "./CatergoryItemList";
import LoginModalContent from './LoginModalContent';

export default function HomeContent() {
  const [activeItem] = useRecoilState(activeCategory);
  const [activeLogin, setActiveLogin] = useRecoilState(activeLoginModal);

  return (
    <Container variant='full'>
      <Box mt={9}>
        <FlexRow alignItems='flex-start'>
          <Box mb={20}>
            <Text size={20} weight={600} color='#25292C'>카테고리</Text>
          </Box>
          <Link href={`/list?categoryId=${activeItem.categoryId}`}>
            <Text size={15} weight={500} color='#50BF50'>
              <Text weight={700}>&apos;{activeItem.name}&apos;</Text>
              글 전체 보기
            </Text>
            <Image
              src='/icons/arrow_right_green.svg'
              alt='arrow right icon'
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
        {activeLogin &&
          <BottomSheet
            isOpen={true}
            onClose={() => setActiveLogin(false)}
          >
            <LoginModalContent onClose={() => setActiveLogin(false)} />
          </BottomSheet>
        }
      </AnimatePresence>
    </Container>
  )
}

