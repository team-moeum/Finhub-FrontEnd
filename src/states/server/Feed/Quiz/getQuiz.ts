import { ApiResponse } from "@/api/type";
import { queryKeys } from "../../queries";
import { get, getSsr } from "@/api/client";

export const getQuiz = async (date?: string) => {
  const path = date ? `/api/v1/main/quiz?date=${date}` : `/api/v1/main/quiz`;

  const response: ApiResponse = await get(
    path,
    queryKeys.quiz(date),
    {},
    true
  );

  if (response.status === "FAIL") {
    const res = { status: "", id: -1, question: "" };

    const errorMsg = response.errorMsg;
    if (errorMsg === "오늘의 퀴즈가 없습니다.") return { ...res, status: 'NO QUIZ' };
    if (errorMsg === "유저가 이미 푼 문제입니다.") return { ...res, status: "SOLVED" };
    if (errorMsg === "로그인이 필요한 기능입니다.") return { ...res, status: 'NO LOGIN' };
    return { ...res, status: 'NO QUIZ' };
  }

  return { status: "SUCCESS", ...response.data?.quizInfo };
};

export const getSsrQuiz = async (date?: string) => {
  const path = date ? `/api/v1/main/quiz?date=${date}` : `/api/v1/main/quiz`;

  const response: ApiResponse = await getSsr(
    path,
    queryKeys.quiz(date),
    {},
    true
  );

  if (response.status === "FAIL") {
    const res = { status: "", id: -1, question: "" };

    const errorMsg = response.errorMsg;
    if (errorMsg === "오늘의 퀴즈가 없습니다.") return { ...res, status: 'NO QUIZ' };
    if (errorMsg === "유저가 이미 푼 문제입니다.") return { ...res, status: "SOLVED" };
    if (errorMsg === "로그인이 필요한 기능입니다.") return { ...res, status: 'NO LOGIN' };
    return { ...res, status: 'NO QUIZ' };
  }

  return { status: "SUCCESS", ...response.data?.quizInfo };
};

