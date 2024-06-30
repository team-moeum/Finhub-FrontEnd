"use client"

import { AppBar } from "@/components/AppBar"
import { Box } from "@/components/Box"
import { AppContainer, Container } from "@/components/Container"
import { Toggle } from "@/components/Toggle"
import { useEffect, useState } from "react"
import { QUIZ_LIST_TYPE, useQuizListData } from "../../_hooks/useQuizListData"
import moment from "moment"
import Loading from "@/app/loading"
import { NoQuizItem, QuizItem } from "../../_component/QuizItem"
import { MissedQuiz } from "@/model/missedQuiz"
import { useSolveQuizHook } from "../../_hooks/useSolveQuizHook"
import { TodayQuizPopup } from "../../_component/TodayQuizPopup"
import { QuizResult } from "../../_component/QuizResult"
import { Stack } from "@/components/Stack"
import { SolvedQuiz } from "@/model/solvedQuiz"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { Tabs } from "@/components/Tabs/Tabs"

const SELECTED_TYPE = {
  missed: 0,
  solved: 1
} as const;

const SELECTED_SOLVED_TYPE = {
  correct: "Y",
  wrong: "N"
} as const;

export const QuizDetailScreen = () => {
  const requestDate = moment().format("YYYYMMDD");

  const [selectedValue, setSelectedValue] = useState<number>(SELECTED_TYPE.missed);
  const [selectedSolvedValue, setSelectedSolvedValue] = useState<string>(SELECTED_SOLVED_TYPE.wrong);

  const { ref: missedRef, isIntersecting: missedIsIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: solvedRef, isIntersecting: solvedIsIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const {
    missedQuizList,
    solvedQuizList,
    fetchNextMissedPage,
    fetchNextSolvedPage,
    hasMissedNextPage,
    hasSolvedNextPage,
  } = useQuizListData({ 
    requestDate: requestDate, 
    type: 'quizDetail',
    solvedType: selectedSolvedValue as "Y" | "N"
  });

  const {
    selectedQuizDate,
    selectedQuizRusult,
    todayQuizPopupModal,
    quizResultPopupModal,
    handleQuizItemClick,
    handleQuizResultClose,
    handleAnswerClick,
  } = useSolveQuizHook();

  useEffect(() => {
    if (missedIsIntersecting && hasMissedNextPage) fetchNextMissedPage();
  }, [missedIsIntersecting, hasMissedNextPage])

  useEffect(() => {
    if (solvedIsIntersecting && hasSolvedNextPage) fetchNextSolvedPage();
  }, [solvedIsIntersecting, hasSolvedNextPage])

  return (
    <AppContainer header>
      <AppBar
        useLeftBack
        leftBackColor="black"
      />

      <Container mt={22}>
        <Toggle
          data={[
            { text: '놓친 퀴즈', value: SELECTED_TYPE.missed },
            { text: '풀었던 퀴즈', value: SELECTED_TYPE.solved },
          ]}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />

        {selectedValue === SELECTED_TYPE.solved &&
          <Box mt={16}>
            <Tabs
              data={[
                { text: '틀렸던 퀴즈', value: SELECTED_SOLVED_TYPE.wrong },
                { text: '맞춘 퀴즈', value: SELECTED_SOLVED_TYPE.correct },
              ]}
              defaultValue={selectedSolvedValue}
              onChange={(value: string) => setSelectedSolvedValue(value)}
            />
          </Box>
        }

        <Stack mt={20} gap={10}>
          {selectedValue === SELECTED_TYPE.missed && (
            (missedQuizList && missedQuizList?.length > 0)
            && <>
                {missedQuizList.map((item: MissedQuiz) => (
                  <QuizItem key={item.id} item={item} onClick={() => handleQuizItemClick(item.targetDate)} />
                ))}
                <Box ref={missedRef} width='100%' height={20} />
              </>
          )}

          {selectedValue === SELECTED_TYPE.solved && (
            (solvedQuizList && solvedQuizList?.length > 0)
            && <>
                {solvedQuizList.map((item: SolvedQuiz) => (
                  <QuizItem key={item.id} item={item} />
                ))}
                <Box ref={solvedRef} width='100%' height={20} />
              </>
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
  )
}
