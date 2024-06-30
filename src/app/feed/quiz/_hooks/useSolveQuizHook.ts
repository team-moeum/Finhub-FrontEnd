import { useToast } from "@/components/Toast/useToast";
import { useModal } from "@/hooks/useModal";
import { QuizSolveUser } from "@/model/QuizSolveUser";
import { usePostQuizSolve } from "@/states/server/mutations";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useSolveQuizHook = () => {
  const [selectedQuizDate, setSelectedQuizDate] = useState<string>('');
  const [selectedQuizRusult, setSelectedQuizRusult] = useState<QuizSolveUser>();

  const { showToast } = useToast();
  const todayQuizPopupModal = useModal();
  const quizResultPopupModal = useModal();

  const queryClient = useQueryClient();
  const quizSolveMutation = usePostQuizSolve({
    onSuccess: (data) => {
      setSelectedQuizRusult(data);
      quizResultPopupModal.open();
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const handleQuizItemClick = (date: string) => {
    setSelectedQuizDate(date);
    todayQuizPopupModal.open();
  }

  const handleQuizResultClose = () => {
    quizResultPopupModal.close();

    queryClient.invalidateQueries({ queryKey: ["quizCalendar"], refetchType: 'all' });
    queryClient.invalidateQueries({ queryKey: ["missedQuiz"], refetchType: 'all' });
    queryClient.invalidateQueries({ queryKey: ["solvedQuiz"], refetchType: 'all' });
  }

  const handleAnswerClick = (id: number, answer: "O" | "X") => {
    todayQuizPopupModal.close();
    quizSolveMutation.mutate({ id, answer });
  }

  return {
    selectedQuizDate,
    selectedQuizRusult,
    todayQuizPopupModal,
    quizResultPopupModal,
    handleQuizItemClick,
    handleQuizResultClose,
    handleAnswerClick
  }
}