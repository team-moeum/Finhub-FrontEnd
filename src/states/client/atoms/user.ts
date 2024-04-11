import { User } from "@/model/User";
import { atom } from "recoil";

export const userState = atom<User>({
    key: 'userState', 
    default: {
        name: "",
        email: "",
        nickname: "",
        avatarUrl: "",
        userType: "",
        userTypeUrl: "",
        pushYN: true,
    }, 
  });