import { QuizTopic } from "./QuizTopic";

export interface QuizInfo {
  status: string,
  id: number;
  question: string;

  correctYN: "Y" | "N";
  comment: string;
  topicList: QuizTopic[];
}