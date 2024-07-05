import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";
import { post } from "@/api/client";

export const postQuizCalendarEmoji = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/quiz/calendar-emoticon`,
    mutationKeys.quizCaledarEmoji,
    param
  );

  return response.data;
};