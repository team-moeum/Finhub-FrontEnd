'use client';

import { useState } from 'react';
import { QuizResult } from './QuizResult';
import Image from 'next/image';
import { useQuiz } from '@/states/server/queries';
import { usePostQuizSolve } from '@/states/server/mutations';
import { QuizSolveUser } from '@/model/QuizSolveUser';
import { Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { Text } from '@/components/Text';
import { FlexBox } from '@/components/FlexBox';
import { Button } from '@/components/Button';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/components/Toast/useToast';
import { LoginSlide } from '@/app/_component/Catergory/LoginSlide';
import { isLoggedIn } from '@/utils/auth_client';

const TodayQuizSolved = () => {
  return (
    <Container variant='thick'>
      <Box
        boxShadow='0px 0px 30px 0px rgba(0, 0, 0, 0.10)'
        radius={20}
        py={33}
        px={34}
      >
        <FlexBox direction='column' gap={16}>
          <Image
            src='/quiz/quiz_icon_good.svg'
            alt='quiz_icon'
            width={235}
            height={196}
          />
          <Text size={20} weight={600} color='#7B8287'>오늘의 퀴즈를 풀었어요</Text>
          <Text size={15} weight={500} color='#CDD1D5'>내일도 퀴즈를 풀어주세요!</Text>
        </FlexBox>
      </Box>
    </Container>
  )
}

const TodayQuizEmpty = () => {
  return (
    <Container variant='thick'>
      <Box
        boxShadow='0px 0px 30px 0px rgba(0, 0, 0, 0.10)'
        radius={20}
        py={33}
        px={34}
      >
        <FlexBox direction='column' gap={16}>
          <Image
            src='/quiz/quiz_icon_vacation.svg'
            alt='quiz_icon'
            width={235}
            height={196}
          />
          <Text size={20} weight={600} color='#7B8287'>오늘은 퀴즈를 잠깐 쉬어가요</Text>
          <Text size={15} weight={500} color='#CDD1D5'>다음 퀴즈를 기대해주세요!</Text>
        </FlexBox>
      </Box>
    </Container>
  )
}

export default function TodayQuiz() {
  const isLogin = isLoggedIn();

  const [quizResult, setQuizResult] = useState<QuizSolveUser>();

  const quizResultPopup = useModal();
  const loginModal = useModal();

  const { data: todayQuiz, refetch: refetchTodayQuiz } = useQuiz();

  const { showToast } = useToast();

  const quizSolveMutation = usePostQuizSolve({
    onSuccess: (data) => {
      setQuizResult(data);
      quizResultPopup.open();
    },
    onError: () => {
      showToast({content: "잠시후 다시 시도해주세요!", type: "warning"});
    }
  });

  const handleAnswerClick = (quizId: number, answer: "O" | "X") => {
    if (!isLogin) {
      return loginModal.open();
    }
    quizSolveMutation.mutate({ id: quizId, answer });
  };

  const handleQuizResultPopupClose = () => {
    quizResultPopup.close();
    refetchTodayQuiz();
  }

  if (todayQuiz.status === "SOLVED") return <TodayQuizSolved />;
  if (todayQuiz.status === "NO QUIZ") return <TodayQuizEmpty />;
  return (
    <Container variant='thick'>
      <Box
        boxShadow='0px 0px 30px 0px rgba(0, 0, 0, 0.10)'
        radius={20}
        py={20}
        px={20}
      >
        <FlexBox direction='column'>
          <Image
            src='/quiz/quiz_icon.svg'
            alt='quiz_icon'
            width={52}
            height={62}
          />

          <Box mt={14}>
            <Text size={18} weight={600} lineHeight={1.4} color='#494F54'>{todayQuiz.question}</Text>
          </Box>

          <FlexBox mt={25} gap={16} width='100%'>
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor='#197EF6'
              onClick={() => handleAnswerClick(todayQuiz.id, "O")}
            >
              <Text size={30} weight={400} color='#FFF'>O</Text>
            </Button>
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor='#E83B3B'
              onClick={() => handleAnswerClick(todayQuiz.id, "X")}
            >
              <Text size={30} weight={400} color='#FFF'>X</Text>
            </Button>
          </FlexBox>
        </FlexBox>
      </Box>

      {quizResult &&
        <QuizResult
          show={quizResultPopup.show}
          onClose={handleQuizResultPopupClose}
          quizResult={quizResult}
        />
      }

      <LoginSlide show={loginModal.show} onClose={loginModal.close} />

    </Container>
  );
}






