import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";

export const getTodayQuiz = async (userId?: number) => {

    const response: ApiResponse = await fetchApi({
      method: "GET",
      path: `/api/v1/main/quiz`,
    });

    if (response.status === "FAIL") {
      if (response.errorMsg === "오늘의 퀴즈가 없습니다.") {
        return null; 
      } else {
        throw new Error(response.errorMsg); 
      }
    } else if (response.status === "SUCCESS") {
      if (!userId) {
        return response.data?.quizInfo.question; 
      } else if (userId) {
        return response.data?.quizInfo.question; 
      } else {
        throw new Error(`Failed to quiz: ${response.errorMsg}`); 
      }
    } else {
      throw new Error(`Failed to quiz: ${response.errorMsg}`);
    }
  };
