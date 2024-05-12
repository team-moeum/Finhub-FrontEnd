import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { queryKeys } from "../../queries";

export const getQuiz = async (date?: string, ssr?: boolean) => {
    const path = date ? `/api/v1/main/quiz?date=${date}` : `/api/v1/main/quiz`;

    const response: ApiResponse = await fetchApi({
      method: "GET",
      path: path,
      tags: queryKeys.quiz(date),
      ssr
    });

    if (response.status === "FAIL") {
      const res = {status: "", id: -1, question: ""};

      const errorMsg = response.errorMsg;
      if (errorMsg === "오늘의 퀴즈가 없습니다.") return {...res, status: 'NO QUIZ'};
      if (errorMsg === "유저가 이미 푼 문제입니다.") return {...res, status: "SOLVED"};

      return {...res, status: 'NO QUIZ'};
    }

    return {status: "SUCCESS", ...response.data?.quizInfo};
};