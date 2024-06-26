"use client";

import { AppContainer, Container } from '@/components/Container';
import dynamic from 'next/dynamic';
import QuizCalIcon from '@/public/quiz/quiz_cal_icon.svg'
import { Box } from '@/components/Box';
import Loading from '@/app/loading';
import { Suspense } from 'react';
import QuizList from './QuizList';
import { Text } from '@/components/Text';
import { FlexBox } from '@/components/FlexBox';

const QuizCalendar = dynamic(() => import('./QuizCalendar'), { ssr: false })

export const QuizPageScreen = () => {
  return (
    <AppContainer header>
      <Container>
        <FlexBox mt={10} gap={8} justifyContent='flex-start'>
          <Text size={18} weight={600} color='#191B1C'>오늘의 퀴즈</Text>
          <QuizCalIcon />
        </FlexBox>
      </Container>

      <Box mt={15} pb={30}>
        <Suspense fallback={<Loading />}>
          <QuizCalendar />
        </Suspense>
      </Box>

      <Box height={10} backgroundColor='#EDF0F3'/>

      <Box mt={25}>
        <QuizList />
      </Box>
    </AppContainer>
  )
}