import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { queryKeys } from "../../queries";

export const getQuizCalender = async (year: string, month: string, ssr?: boolean) => {  
    const response: ApiResponse = await fetchApi({
      method: "GET",
      path: `/api/v1/main/quiz/${year}/${month}`,
      tags: queryKeys.quizCalendar(year, month),
      ssr
    });

    if (response.status === "FAIL") {
      return {}
    }

    return response.data;
};