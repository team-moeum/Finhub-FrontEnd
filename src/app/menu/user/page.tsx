import style from "./user.module.css";
import MenuHeader from "../../_component/Menu/MenuHeader";
import MenuCard from "@/app/_component/Menu/MenuCard";

export default function UserPage() {
    return (
        <div className={style.container}>
            <MenuHeader>계정</MenuHeader>
            <div className={style.content}>
              <MenuCard href="/menu/user/name">
                <span>이름 변경</span>
                <span className={style.user_name}>핀허브</span>
              </MenuCard>
              <MenuCard href="/">비밀번호 변경</MenuCard>
            </div>
        </div>
    )
}