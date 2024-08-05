import { QuizSolveUser } from "@/model/QuizSolveUser";
import { atom } from "recoil";

export const quizResultCacheState = atom<QuizSolveUser & {startPath: string} | null>({
  key: "quizResultCache",
  default: null
})