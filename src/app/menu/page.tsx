import { Metadata } from "next";
import style from "./menu.module.css";
import LoginBox from "../_component/Menu/LoginBox";
import MenuCard from "../_component/Menu/MenuCard";


export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <div className={style.container}>
      <LoginBox />
      <div className={style.content}>
        <MenuCard href="/menu">공지사항</MenuCard>
        <MenuCard href="/menu">앱 설정</MenuCard>
        <MenuCard href="/menu">고객센터</MenuCard>
      </div>
    </div>
  );
}
