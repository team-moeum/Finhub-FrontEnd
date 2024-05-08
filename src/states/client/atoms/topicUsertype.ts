import { UserType } from "@/model/UserType";
import { atom } from "recoil";

export const topicUserType = atom<UserType>({
  key: "topicUserType",
  default: {id: 0, name:"", img_path: ""}
})