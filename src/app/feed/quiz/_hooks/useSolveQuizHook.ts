import { useToast } from "@/components/Toast/useToast";
import { useModal } from "@/hooks/useModal";
import { QuizSolveUser } from "@/model/QuizSolveUser";
import { usePostQuizSolve } from "@/states/server/mutations";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useCache } from "@/hooks/useCache";
import { CACHE_KEY } from "@/hooks/useCacheControl";

export const useSolveQuizHook = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { get: getCache, set: setCache, clear: clearCache } = useCache();

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

  useEffect(() => {
    const checkCache = () => {
      const cachedResult = getCache(CACHE_KEY.quizResult);
      if (cachedResult) {
        setSelectedQuizRusult(cachedResult);
        quizResultPopupModal.open();
      }
    };

    checkCache();
  }, []);

  const handleQuizItemClick = (date: string) => {
    setSelectedQuizDate(date);
    todayQuizPopupModal.open();
  }

  const handleQuizResultClose = () => {
    quizResultPopupModal.close();
    clearCache(CACHE_KEY.quizResult);

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
    setCache(CACHE_KEY.quizResult, { ...selectedQuizRusult, startPath: pathName });
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
    handleClickTag,
  }
}