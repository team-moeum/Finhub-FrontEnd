import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { deleteGptColumnComment } from "./Column/ColumnComment/deleteGptColumnComment";
import { postBanGptColumnComment } from "./Column/ColumnComment/postBanGptColumnComment";
import { postGptColumnComment } from "./Column/ColumnComment/postGptColumnComment";
import { postReportGptColumnComment } from "./Column/ColumnComment/postReportGptColumnComment";
import { putGptColumnComment } from "./Column/ColumnComment/putGptColumnComment";
import { postGptColumnLike } from "./Column/ColumnPost/postGptColumnLike";
import { postQuizCalendarEmoji } from "./Feed/Quiz/postQuizCalenderEmoji";
import { postQuizSolve } from "./Feed/Quiz/postQuizSolve";
import { postScrap } from "./Home/postScrap";
import { deleteUserAvatar } from "./Menu/deleteUserAvatar";
import { patchPushAlarmYn } from "./Menu/patchPushAlarmYn";
import { postNickname } from "./Menu/postNinckname";
import { postQuit } from "./Menu/postQuit";
import { postUserAvatar } from "./Menu/postUserAvatar";
import { postUserType } from "./Menu/postUserType";
import { postAlarm } from "./Notify/postAlarm";
import { deleteRecentKeyword } from "./Search/deleteRecentKeyword";
import { postNoSearchWord } from "./Search/postNoSearchWord";

export const mutationKeys = {
  scrap: ["scrap"],
  nickname: ["nickname"],
  userType: ["userType"],
  userAvatar: ["userAvatar"],
  deleteUserAvatar: ["deleteUserAvatar"],
  updateNoSearchWord: ["updateNoSearchWord"],
  deleteRecentKeyword: ["deleteRecentKeyword"],
  gptColumnLike: ["gptColumnLike"],
  gptColumnComment: ["gptColumnComment"],
  deleteGptColumnComment: ["deleteGptColumnComment"],
  editGptColumnComment: ["editGptColumnComment"],
  reportGptColumnComment: ["reportGptColumnComment"],
  banGptColumnComment: ["banGptColumnComment"],
  quit: ["quit"],
  quizSolve: ["quizSolve"],
  quizCaledarEmoji: ["quizCalendarEmoji"],
  readAlarm: ["readAlarm"],
  pushAlarmYn: ["pushAlarmYn"]
};

export const SCRAP_TYPE = {
  topic: 1,
  column: 2
} as const;

export const useScrap = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; type: number; categoryId?: number }>({
    mutationKey: mutationKeys.scrap,
    mutationFn: param => postScrap(param),
    ...options
  });
};

export const useUpdateNickname = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { nickname: string }>({
    mutationKey: mutationKeys.nickname,
    mutationFn: param => postNickname(param),
    ...options
  });
};

export const useUpdateUserType = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.userType,
    mutationFn: param => postUserType(param),
    ...options
  });
};

export const useUpdateUserAvatar = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.userAvatar,
    mutationFn: param => postUserAvatar(param),
    ...options
  });
};

export const useDeleteUserAvatar = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error>({
    mutationKey: mutationKeys.deleteUserAvatar,
    mutationFn: () => deleteUserAvatar(),
    ...options
  });
};

export const useDeleteRecentKeyword = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error>({
    mutationKey: mutationKeys.deleteRecentKeyword,
    mutationFn: () => deleteRecentKeyword(),
    ...options
  });
};

export const useUpdateNoSearchWord = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { keyword: string }>({
    mutationKey: mutationKeys.updateNoSearchWord,
    mutationFn: param => postNoSearchWord(param),
    ...options
  });
};

export const COLUMN_LIKE_TYPE = {
  column: 1,
  comment: 2
} as const;

export const useGptColumnLike = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; type: number }>({
    mutationKey: mutationKeys.gptColumnLike,
    mutationFn: param => postGptColumnLike(param),
    ...options
  });
};

export const useGptColumnComment = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; comment: string }>({
    mutationKey: mutationKeys.gptColumnComment,
    mutationFn: param => postGptColumnComment(param),
    ...options
  });
};

export const useDeleteGptColumnComment = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.deleteGptColumnComment,
    mutationFn: param => deleteGptColumnComment(param.id),
    ...options
  });
};

export const useEditGptColumnComment = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; comment: string }>({
    mutationKey: mutationKeys.editGptColumnComment,
    mutationFn: param => putGptColumnComment(param.id, param.comment),
    ...options
  });
};

export const useReportGptColumnComment = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { commentId: number; reportId: number }>({
    mutationKey: mutationKeys.reportGptColumnComment,
    mutationFn: param => postReportGptColumnComment(param.commentId, param.reportId),
    ...options
  });
};

export const useBanGptColumnComment = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { memberId: number }>({
    mutationKey: mutationKeys.banGptColumnComment,
    mutationFn: param => postBanGptColumnComment(param.memberId),
    ...options
  });
};

export const usePostQuizSolve = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; answer: "O" | "X" }>({
    mutationKey: mutationKeys.quizSolve,
    mutationFn: param => postQuizSolve(param),
    ...options
  });
};

export const usePostQuizCalendarEmoji = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.quizCaledarEmoji,
    mutationFn: param => postQuizCalendarEmoji(param),
    ...options
  });
};

export const usePostQuit = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number; reason: string }>({
    mutationKey: mutationKeys.quit,
    mutationFn: param => postQuit(param),
    ...options
  });
};

export const useReadAlram = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.quit,
    mutationFn: param => postAlarm(param),
    ...options
  });
};

export const usePushAlarmYn = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { yn: boolean }>({
    mutationKey: mutationKeys.pushAlarmYn,
    mutationFn: param => patchPushAlarmYn(param),
    ...options
  });
};
