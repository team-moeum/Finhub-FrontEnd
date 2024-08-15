import { atom } from "recoil";

import { UserType } from "@/model/UserType";

export const topicUserType = atom<UserType>({
  key: "topicUserType",
  default: { id: 0, name: "", img_path: "" }
});
