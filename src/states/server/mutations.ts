
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { postScrap } from "./Home/postScrap";
import { postNickname } from "./Menu/postNinckname";
import { postUserType } from "./Menu/postUserType";
import { postUserAvatar } from "./Menu/postUserAvatar";
import { deleteUserAvatar } from "./Menu/deleteUserAvatar";
import { postNoSearchWord } from "./Search/postNoSearchWord";
import { deleteRecentKeyword } from "./Search/deleteRecentKeyword";

//
import { postQuizSolve } from "./Feed/Quiz/postQuizSolve";

export const mutationKeys = {
  scrap: ["scrap"],
  nickname: ["nickname"],
  userType: ["userType"],
  userAvatar: ["userAvatar"],
  deleteUserAvatar: ["deleteUserAvatar"],
  updateNoSearchWord: ["updateNoSearchWord"],
  deleteRecentKeyword: ["deleteRecentKeyword"],
  quizSolve:["quizSolve"],
}

export const useScrap = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number, type: number }>({
    mutationKey: mutationKeys.scrap,
    mutationFn: (param) => postScrap(param),
    ...options,
  });
}

export const useUpdateNickname = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { nickname: string }>({
    mutationKey: mutationKeys.nickname,
    mutationFn: (param) => postNickname(param),
    ...options,
  });
}

export const useUpdateUserType = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.userType,
    mutationFn: (param) => postUserType(param),
    ...options,
  });
}

export const useUpdateUserAvatar = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { id: number }>({
    mutationKey: mutationKeys.userAvatar,
    mutationFn: (param) => postUserAvatar(param),
    ...options,
  });
}

export const useDeleteUserAvatar = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error>({
    mutationKey: mutationKeys.deleteUserAvatar,
    mutationFn: () => deleteUserAvatar(),
    ...options,
  });
}

export const useDeleteRecentKeyword = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error>({
    mutationKey: mutationKeys.deleteRecentKeyword,
    mutationFn: () => deleteRecentKeyword(),
    ...options,
  })
}

export const useUpdateNoSearchWord = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { keyword: string }>({
    mutationKey: mutationKeys.updateNoSearchWord,
    mutationFn: (param) => postNoSearchWord(param),
    ...options,
  })
}

export const usePostQuizSolve = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { quizId: number, answer: string }>({ // quizId와 answer를 전달하는 mutation 추가
    mutationKey: mutationKeys.quizSolve,
    mutationFn: (param) => postQuizSolve(param.quizId, param.answer),
    ...options,
  });
}