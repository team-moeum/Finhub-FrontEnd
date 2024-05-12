export interface EmoticonData {
    id: number,
    emoticonImgPath: string
}

export interface QuizCalenderData {
    date: string,
    solvedYn: "Y" | "N"
}

export interface QuizCalenderResponse {
    userEmoticon: string,
    emoticonData: EmoticonData[],
    quizData: QuizCalenderData[]
}