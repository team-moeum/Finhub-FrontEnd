import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { QuizSolveUser } from "@/model/QuizSolveUser";

export const postQuizSolve = async (quizId: number, answer: string)=> {
 
      const response: ApiResponse = await fetchApi({
        method: "POST",
        path: `/api/v1/main/quiz`,
        body: {
          id: quizId,
          answer: answer
        }
      });
  
      if (response.status === "FAIL") {
        throw new Error(response.errorMsg);
      } else if (response.status === "SUCCESS") {
        return response.data?.quizResult || null;
      }
  
      return null;
    
  };