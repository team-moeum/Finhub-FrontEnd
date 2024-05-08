import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { QuizInfo } from "@/model/QuizInfo";

export const getQuizDate = async (date: string, userId?: number) => {
 
    const response: ApiResponse = await fetchApi({
      method: "GET",
      path: `/api/v1/main/quiz?date=${date}`,
    });

    if (response.status === "FAIL") {
      throw new Error(response.errorMsg);
    } else if (response.status === "SUCCESS") {
      return response.data?.quizInfo;
    }

    return null;
 
};