export interface MissedQuiz {
    id: number;
    question: string;
    targetDate: string;
  }
  
  export interface MissedQuizResponse {
    status: "SUCCESS" | "FAIL";
    errorMsg?: string;
    data?: {
      quizList: MissedQuiz[];
    };
  }
  