import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";
import { post } from "@/api/client";

export const postQuizSolve = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/quiz`,
    mutationKeys.quizSolve,
    param
  );

  return response.data.quizInfo;
};