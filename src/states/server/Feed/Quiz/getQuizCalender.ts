import { ApiResponse } from "@/api/type";
import { queryKeys } from "../../queries";
import { get, getSsr } from "@/api/client";

export const getQuizCalender = async (year: string, month: string) => {
  const response: ApiResponse = await get(
    `/api/v1/main/quiz/${year}/${month}`,
    queryKeys.quizCalendar(year, month),
  );

  return response.data;
};

export const getSsrQuizCalender = async (year: string, month: string) => {
  const response: ApiResponse = await getSsr(
    `/api/v1/main/quiz/${year}/${month}`,
    queryKeys.quizCalendar(year, month),
  );

  return response.data;
};