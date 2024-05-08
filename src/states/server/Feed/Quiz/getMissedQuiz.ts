import { fetchApi } from "@/api/fetchApi";

export const getMissedQuiz = async (date: string, limit: number)=> {

    const response = await fetchApi({
      method: "GET",
      path: `/api/v1/main/quiz/missed?date=${date}&limit=${limit}`
    });
    return response.data;
  
};
