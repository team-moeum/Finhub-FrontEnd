/** NOT USE */
'use client'

import { userState } from "@/states/client/atoms/user";
import { useRecoilValue } from "recoil";

export const isUserLoginCsr = () => {
  const userInfo = useRecoilValue(userState);

  return userInfo.name !== "";
}