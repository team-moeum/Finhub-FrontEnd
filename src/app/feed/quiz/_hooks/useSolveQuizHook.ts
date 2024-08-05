import { useToast } from "@/components/Toast/useToast";
import { useModal } from "@/hooks/useModal";
import { QuizSolveUser } from "@/model/QuizSolveUser";
import { usePostQuizSolve } from "@/states/server/mutations";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { quizResultCacheState } from "@/states/client/atoms/cache";
import { usePathname, useRouter } from "next/navigation";

export const useSolveQuizHook = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [selectedQuizDate, setSelectedQuizDate] = useState<string>('');
  const [selectedQuizRusult, setSelectedQuizRusult] = useState<QuizSolveUser>();
  const [quizResultCache, setQuizResultCache] = useRecoilState(quizResultCacheState);

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

  useEffect(() => {
    if (quizResultCache) {
      setSelectedQuizRusult(quizResultCache);
      quizResultPopupModal.open();
    }
  }, [quizResultCache]);

  const handleQuizItemClick = (date: string) => {
    setSelectedQuizDate(date);
    todayQuizPopupModal.open();
  }

  const handleQuizResultClose = () => {
    quizResultPopupModal.close();
    setQuizResultCache(null);

    queryClient.invalidateQueries({ queryKey: ["quizCalendar"], refetchType: 'all' });
    queryClient.invalidateQueries({ queryKey: ["missedQuiz"], refetchType: 'all' });
    queryClient.invalidateQueries({ queryKey: ["solvedQuiz"], refetchType: 'all' });
  }

  const handleAnswerClick = (id: number, answer: "O" | "X") => {
    todayQuizPopupModal.close();
    quizSolveMutation.mutate({ id, answer });
  }

  const handleClickTag = (url: string) => {
    if (!selectedQuizRusult) return;
    setQuizResultCache({...selectedQuizRusult, startPath: pathName});
    router.push(url);
  }

  return {
    selectedQuizDate,
    selectedQuizRusult,
    todayQuizPopupModal,
    quizResultPopupModal,
    handleQuizItemClick,
    handleQuizResultClose,
    handleAnswerClick,
    quizResultCache,
    handleClickTag,
  }
}