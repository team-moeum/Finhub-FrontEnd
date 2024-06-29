'use client'
import Image from 'next/image';
import { useState } from 'react';
import moment from 'moment';
import { MissedQuiz } from '@/model/missedQuiz';
import { SolvedQuiz } from '@/model/solvedQuiz';
import Loading from '@/app/loading';
import { Toggle } from '@/components/Toggle';
import { AppContainer, Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { FlexBox } from '@/components/FlexBox';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { useQuizListData } from '../_hooks/useQuizListData';
import { TodayQuizPopup } from './TodayQuizPopup';
import { QuizResult } from './QuizResult';
import { useSolveQuizHook } from '../_hooks/useSolveQuizHook';

import QuizListItemIcon from '@/public/quiz/quiz_icon_list.svg';
import { LinkButton } from '@/components/LinkButton';

const QuizItem = ({
  item,
  onClick
}: {
  item: MissedQuiz | SolvedQuiz,
  onClick?: () => void;
}) => {
  return (
    <Button full height={60} radius={10} backgroundColor='#F9FAFA' onClick={onClick}>
      <FlexBox width='100%' px={16} gap={12} justifyContent='flex-start'>
        <QuizListItemIcon />
        <Stack gap={4}>
          <Text textAlign='left' size={15} weight={500} color='#494F54'>{item.question}</Text>
          <Text textAlign='left' size={10} weight={400} color='#CDD1D5'>{item.targetDate}</Text>
        </Stack>
      </FlexBox>
    </Button>
  )
}

const NoQuizItem = ({ text }: { text: string }) => {
  return (
    <FlexBox width='100%' height={60} radius={10} backgroundColor='#F9FAFA'>
      <Text size={15} weight={500} color='#7B8287'>{text}</Text>
    </FlexBox>
  )
}

const QuizDetailButton = () => {
  return (
    <LinkButton href={`/feed/quiz/detail`}>
      <FlexBox height={36} backgroundColor="#F6F7F9" radius={10}>
        <Text size={15} weight={600} color="#A6ABAF">더보기</Text>
      </FlexBox>
    </LinkButton>
  )
}

export const LoginNeedBox = () => {
  return (
    <Container>
      <Toggle
        data={[
          { text: '놓친 퀴즈', value: 0 },
          { text: '풀었던 퀴즈', value: 0 },
        ]}
      />
      <Box
        mt={22}
        padding={34}
        radius={20}
        boxShadow={'0px 0px 30px 0px rgba(0, 0, 0, 0.10)'}
      >
        <FlexBox direction='column' gap={16}>
          <Image
            src='/quiz/quiz_icon_login.svg'
            alt='quiz_icon'
            width={235}
            height={153}
          />
          <Text size={20} weight={600} color='#7B8287'>로그인이 필요한 서비스입니다</Text>
        </FlexBox>
      </Box>
    </Container>
  )
}

const SELECTED_TYPE = {
  missed: 0,
  solved: 1
} as const;

export default function QuizList() {
  const requestDate = moment().format("YYYYMMDD");

  const [selectedValue, setSelectedValue] = useState<number>(SELECTED_TYPE.missed);

  const {
    isLoading,
    missedQuizList,
    solvedQuizList
  } = useQuizListData({ requestDate: requestDate });

  const {
    selectedQuizDate,
    selectedQuizRusult,
    todayQuizPopupModal,
    quizResultPopupModal,
    handleQuizItemClick,
    handleQuizResultClose,
    handleAnswerClick
  } = useSolveQuizHook();

  if (isLoading) return <Loading height={300} />;
  return (
    <AppContainer>
      <Container>
        <Toggle
          data={[
            { text: '놓친 퀴즈', value: SELECTED_TYPE.missed },
            { text: '풀었던 퀴즈', value: SELECTED_TYPE.solved },
          ]}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />

        <Stack mt={20} gap={10}>
          {selectedValue === SELECTED_TYPE.missed && (
            (missedQuizList && missedQuizList?.length > 0)
              ? <>
                  {missedQuizList.map((item: MissedQuiz) => (
                    <QuizItem key={item.id} item={item} onClick={() => handleQuizItemClick(item.targetDate)} />
                  ))}
                  <QuizDetailButton />
                </>
              : <NoQuizItem text='놓친 퀴즈가 없어요' />
          )}

          {selectedValue === SELECTED_TYPE.solved && (
            (solvedQuizList && solvedQuizList?.length > 0)
            ? <>
                {solvedQuizList.map((item: SolvedQuiz) => (
                  <QuizItem key={item.id} item={item} />
                ))}
                <QuizDetailButton />
              </>
              : <NoQuizItem text='풀었던 퀴즈가 없어요' />
          )}
        </Stack>
      </Container>

      <TodayQuizPopup
        show={todayQuizPopupModal.show}
        date={selectedQuizDate}
        onAnswerClick={handleAnswerClick}
        onClose={todayQuizPopupModal.close}
      />

      {selectedQuizRusult &&
        <QuizResult
          show={quizResultPopupModal.show}
          onClose={handleQuizResultClose}
          quizResult={selectedQuizRusult}
          onSolveOtherClick={handleQuizResultClose}
        />
      }

    </AppContainer>
  );
}
