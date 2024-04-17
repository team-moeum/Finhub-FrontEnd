/** NOT USE */
'use client'

import { User } from "@/model/User";
import { userState } from "@/states/client/atoms/user";
import { useResetRecoilState } from "recoil";

const defaultClientInfo: User = {
  name: "",
  email: "",
  nickname: "",
  avatarUrl: "",
  userType: "",
  userTypeUrl: "",
  pushYN: false,
}

const getClientInfo = () => {
  if (typeof window === "undefined") return defaultClientInfo
  if (localStorage.getItem("userInfo"))
    return JSON.parse(localStorage.getItem("userInfo") || "")
  return defaultClientInfo
}

const setClientInfo = (userInfo: any) => {
  if (typeof window !== "undefined")
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

const removeClientInfo = () => {
  const resetUserInfo = useResetRecoilState(userState);
  if (typeof window !== "undefined")
    resetUserInfo();
    localStorage.removeItem("userInfo");
}

export {
  getClientInfo,
  setClientInfo,
  removeClientInfo
}