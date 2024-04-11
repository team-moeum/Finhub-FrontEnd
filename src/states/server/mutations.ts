
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { postScrap } from "./Post/postScrap";


export const mutationKeys = {
  scrap: ["scrap"],
}

export const useScrap = (options?: UseMutationOptions<any, Error, any>) => {
  return useMutation<any, Error, { topicId: number }>({
    mutationKey: mutationKeys.scrap,
    mutationFn: (param) => postScrap(param),
    ...options,
  });
}