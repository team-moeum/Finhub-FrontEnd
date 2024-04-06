import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";

export const ClientSession = () => {
    const [user, _] = useRecoilState(userState);
    if (user) return {isLogin: true, User: user}
    else return {isLogin: false, User: ""}
}

