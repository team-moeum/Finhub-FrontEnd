"use client";

import { AppContainer, Container } from '@/components/Container';
import QuizCalIcon from '@/public/quiz/quiz_cal_icon.svg'
import { Box } from '@/components/Box';
import { Suspense } from 'react';
import QuizList, { LoginNeedBox } from './QuizList';
import { Text } from '@/components/Text';
import { FlexBox } from '@/components/FlexBox';
import QuizCalendar, { SkeletonCalendar } from './QuizCalendar';
import { isLoggedIn } from '@/utils/auth_client';

export const QuizPageScreen = () => {
  const isLogin = isLoggedIn();
  
  return (
    <AppContainer header mb={34}>
      <Container>
        <FlexBox mt={10} gap={8} justifyContent='flex-start'>
          <Text size={18} weight={600} color='#191B1C'>오늘의 퀴즈</Text>
          <QuizCalIcon />
        </FlexBox>
      </Container>

      <Box mt={15} pb={30}>
        <Suspense fallback={<SkeletonCalendar />}>
          <QuizCalendar />
        </Suspense>
      </Box>

      <Box height={10} backgroundColor='#EDF0F3'/>

      <Box mt={25}>
        {isLogin 
          ?
            <QuizList />
          :
            <LoginNeedBox />
        }
      </Box>
    </AppContainer>
  )
}