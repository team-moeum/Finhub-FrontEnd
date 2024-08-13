"use client";

import moment from "moment";
import Image from "next/image";
import { Fragment, useState } from "react";

import Loading from "@/app/loading";

import { QUIZ_LIST_TYPE, useQuizListData } from "../_hooks/useQuizListData";
import { useSolveQuizHook } from "../_hooks/useSolveQuizHook";
import { NoQuizItem, QuizDetailButton, QuizItem } from "./QuizItem";
import { QuizResult } from "./QuizResult";
import { TodayQuizPopup } from "./TodayQuizPopup";

import { MissedQuiz } from "@/model/missedQuiz";
import { SolvedQuiz } from "@/model/solvedQuiz";

import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Toggle } from "@/components/Toggle";

export const LoginNeedBox = () => {
  return (
    <Container>
      <Toggle
        data={[
          { text: "놓친 퀴즈", value: 0 },
          { text: "풀었던 퀴즈", value: 0 }
        ]}
      />
      <Box mt={22} padding={34} radius={20} boxShadow={"0px 0px 30px 0px rgba(0, 0, 0, 0.10)"}>
        <FlexBox direction="column" gap={16}>
          <Image src="/quiz/quiz_icon_login.svg" alt="quiz_icon" width={235} height={153} />
          <Text size={20} weight={600} color="#7B8287">
            로그인이 필요한 서비스입니다
          </Text>
        </FlexBox>
      </Box>
    </Container>
  );
};

const SELECTED_TYPE = {
  missed: 0,
  solved: 1
} as const;

export default function QuizList() {
  const requestDate = moment().format("YYYYMMDD");

  const [selectedValue, setSelectedValue] = useState<number>(SELECTED_TYPE.missed);

  const { isLoading, missedQuizList, solvedQuizList } = useQuizListData({
    requestDate: requestDate,
    solvedType: "X"
  });

  const {
    selectedQuizDate,
    selectedQuizRusult,
    todayQuizPopupModal,
    quizResultPopupModal,
    handleQuizItemClick,
    handleQuizResultClose,
    handleAnswerClick,
    handleClickTag,
    handleSolvedQuizClick
  } = useSolveQuizHook();

  if (isLoading) return <Loading height={300} />;
  return (
    <Fragment>
      <Container>
        <Toggle
          data={[
            { text: "놓친 퀴즈", value: SELECTED_TYPE.missed },
            { text: "풀었던 퀴즈", value: SELECTED_TYPE.solved }
          ]}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />

        <Stack mt={20} gap={10}>
          {selectedValue === SELECTED_TYPE.missed &&
            (missedQuizList && missedQuizList?.length > 0 ? (
              <>
                {missedQuizList.map((item: MissedQuiz) => (
                  <QuizItem
                    key={item.id}
                    item={item}
                    onClick={() => handleQuizItemClick(item.targetDate)}
                  />
                ))}
                <QuizDetailButton />
              </>
            ) : (
              <NoQuizItem text="놓친 퀴즈가 없어요" />
            ))}

          {selectedValue === SELECTED_TYPE.solved &&
            (solvedQuizList && solvedQuizList?.length > 0 ? (
              <>
                {solvedQuizList.map((item: SolvedQuiz) => (
                  <QuizItem key={item.id} item={item} onClick={() => handleSolvedQuizClick(item.targetDate)}/>
                ))}
                <QuizDetailButton />
              </>
            ) : (
              <NoQuizItem text="풀었던 퀴즈가 없어요" />
            ))}
        </Stack>
      </Container>

      <TodayQuizPopup
        show={todayQuizPopupModal.show}
        date={selectedQuizDate}
        onAnswerClick={handleAnswerClick}
        onClose={todayQuizPopupModal.close}
      />

      {selectedQuizRusult && (
        <QuizResult
          show={quizResultPopupModal.show}
          onClose={handleQuizResultClose}
          quizResult={selectedQuizRusult}
          onSolveOtherClick={handleQuizResultClose}
          onTagClick={handleClickTag}
        />
      )}
    </Fragment>
  );
}
