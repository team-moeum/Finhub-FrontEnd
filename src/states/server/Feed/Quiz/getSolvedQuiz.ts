import { fetchApi } from "@/api/fetchApi";
import { queryKeys } from "../../queries";

export const getSolvedQuiz = async (isCorrect: string, date: string, limit?: number, ssr?: boolean) => {
    const path = limit ? `/api/v1/main/quiz/solved?date=${date}&limit=${limit}&isCorrect=${isCorrect}` : `/api/v1/main/quiz/solved/${isCorrect}?date=${date}`;
    const response = await fetchApi({
        method: "GET",
        path: path,
        tags: queryKeys.solvedQuiz(isCorrect, date, limit),
        ssr
    });

    if (response.status === "FAIL") {
        return null;
    }

    return response.data.quizList;
};
