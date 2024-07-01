import { fetchApi } from "@/api/fetchApi";
import { ApiResponse } from "@/api/type";
import { mutationKeys } from "../../mutations";

export const postQuizCalendarEmoji = async (param: any) => {

    const response: ApiResponse = await fetchApi({
        method: "POST",
        path: `/api/v1/main/quiz/calendar-emoticon`,
        tags: mutationKeys.quizCaledarEmoji,
        body: param
    });

    if (!response.data) {
        throw new Error("Failed to parse server response");
    }

    if (response.status === "FAIL") {
        throw new Error(`Failed postQuizCalendarEmoji : ${response.errorMsg}`);
    }

    return response.data;
};