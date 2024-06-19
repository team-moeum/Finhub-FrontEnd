import { QuizTopic } from "./QuizTopic";

export interface QuizSolveUser {
  id: number;
  correctYN: "Y" | "N";
  comment: string;
  topicList: QuizTopic[];
}