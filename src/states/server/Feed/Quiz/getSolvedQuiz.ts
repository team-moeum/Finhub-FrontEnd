import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";

export const getSolvedQuiz = async (isCorrect: string, date: string, limit: number, ssr?: boolean) => {
    const response = await fetchApi({
        method: "GET",
        path: `/api/v1/main/quiz/solved/${isCorrect}?date=${date}&limit=${limit}`,
        tags: queryKeys.solvedQuiz(isCorrect, date, limit),
        ssr
    });

    if (response.status === "FAIL") {
        return [];
    }

    return response.data.quizList;
};
