import { mutationKeys } from "../../mutations";

import { post } from "@/api/client";
import { ApiResponse } from "@/api/type";

export const postQuizCalendarEmoji = async (param: any) => {
  const response: ApiResponse = await post(
    `/api/v1/main/quiz/calendar-emoticon`,
    mutationKeys.quizCaledarEmoji,
    param
  );

  return response.data;
};
