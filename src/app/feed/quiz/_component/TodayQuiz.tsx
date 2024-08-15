"use client";

import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LoginSlide } from "@/app/_component/Catergory/LoginSlide";

import { QuizResult } from "./QuizResult";

import { usePostQuizSolve } from "@/states/server/mutations";
import { useQuiz } from "@/states/server/queries";

import { QuizSolveUser } from "@/model/QuizSolveUser";

import { isLoggedIn } from "@/utils/auth_client";

import { useCache } from "@/hooks/useCache";
import { CACHE_KEY } from "@/hooks/useCacheControl";
import { useModal } from "@/hooks/useModal";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Text } from "@/components/Text";
import { useToast } from "@/components/Toast/useToast";

const TodayQuizSolved = () => {
  return (
    <Container variant="thick">
      <Box boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.10)" radius={20} py={33} px={34}>
        <FlexBox direction="column" gap={16}>
          <Image src="/quiz/quiz_icon_good.svg" alt="quiz_icon" width={235} height={196} />
          <Text size={20} weight={600} color="#7B8287">
            오늘의 퀴즈를 풀었어요
          </Text>
          <Text size={15} weight={500} color="#CDD1D5">
            내일도 퀴즈를 풀어주세요!
          </Text>
        </FlexBox>
      </Box>
    </Container>
  );
};

const TodayQuizEmpty = () => {
  return (
    <Container variant="thick">
      <Box boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.10)" radius={20} py={33} px={34}>
        <FlexBox direction="column" gap={16}>
          <Image src="/quiz/quiz_icon_vacation.svg" alt="quiz_icon" width={235} height={196} />
          <Text size={20} weight={600} color="#7B8287">
            오늘은 퀴즈를 잠깐 쉬어가요
          </Text>
          <Text size={15} weight={500} color="#CDD1D5">
            다음 퀴즈를 기대해주세요!
          </Text>
        </FlexBox>
      </Box>
    </Container>
  );
};

export default function TodayQuiz() {
  const isLogin = isLoggedIn();

  const router = useRouter();
  const pathName = usePathname();
  const { get: getCache, set: setCache, clear: clearCache } = useCache();

  const [quizResult, setQuizResult] = useState<QuizSolveUser>();

  const { showToast } = useToast();
  const quizResultPopup = useModal();
  const loginModal = useModal();

  const { data: todayQuiz } = useQuiz();

  const queryClient = useQueryClient();
  const quizSolveMutation = usePostQuizSolve({
    onSuccess: data => {
      setQuizResult(data);
      quizResultPopup.open();
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const invalidateQuizQuery = () => {
    queryClient.invalidateQueries({ queryKey: ["quiz"] });
    queryClient.invalidateQueries({ queryKey: ["missedQuiz"] });
    queryClient.invalidateQueries({ queryKey: ["solvedQuiz"] });
    queryClient.invalidateQueries({ queryKey: ["quizCalendar"] });
  };

  useEffect(() => {
    const checkCache = () => {
      const cachedResult = getCache(CACHE_KEY.quizResult);
      if (cachedResult) {
        setQuizResult(cachedResult);
        quizResultPopup.open();
      }
    };

    checkCache();
  }, []);

  const handleAnswerClick = (quizId: number, answer: "O" | "X") => {
    if (!isLogin) {
      return loginModal.open();
    }
    quizSolveMutation.mutate({ id: quizId, answer });
  };

  const handleQuizResultPopupClose = () => {
    quizResultPopup.close();
    clearCache(CACHE_KEY.quizResult);
    invalidateQuizQuery();
  };

  const handleClickTag = (url: string) => {
    if (!quizResult) return;
    setCache(CACHE_KEY.quizResult, { ...quizResult, startPath: pathName });
    router.push(url);
  };

  const handleOtherQuizClick = () => {
    clearCache(CACHE_KEY.quizResult);
    invalidateQuizQuery();
    router.push("/feed/quiz");
  };

  if (todayQuiz.status === "SOLVED") return <TodayQuizSolved />;
  if (todayQuiz.status === "NO QUIZ") return <TodayQuizEmpty />;
  return (
    <Container variant="thick">
      <Box boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.10)" radius={20} py={20} px={20}>
        <FlexBox direction="column">
          <Image src="/quiz/quiz_icon.svg" alt="quiz_icon" width={52} height={62} />

          <Box mt={14}>
            <Text size={18} weight={600} lineHeight={1.4} color="#494F54">
              {todayQuiz.question}
            </Text>
          </Box>

          <FlexBox mt={25} gap={16} width="100%">
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor="#197EF6"
              onClick={() => handleAnswerClick(todayQuiz.id, "O")}
            >
              <Text size={30} weight={400} color="#FFF">
                O
              </Text>
            </Button>
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor="#E83B3B"
              onClick={() => handleAnswerClick(todayQuiz.id, "X")}
            >
              <Text size={30} weight={400} color="#FFF">
                X
              </Text>
            </Button>
          </FlexBox>
        </FlexBox>
      </Box>

      {quizResult && (
        <QuizResult
          show={quizResultPopup.show}
          onClose={handleQuizResultPopupClose}
          quizResult={quizResult}
          onTagClick={handleClickTag}
          onSolveOtherClick={handleOtherQuizClick}
        />
      )}

      <LoginSlide show={loginModal.show} onClose={loginModal.close} />
    </Container>
  );
}
