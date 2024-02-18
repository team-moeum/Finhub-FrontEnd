import { Metadata } from "next";
import style from "./menu.module.css";
import LoginBox from "./_component/LoginBox";
import MenuCard from "./_component/MenuCard";


export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <div className={style.container}>
      <LoginBox />
      <div className={style.content}>
        <MenuCard>공지사항</MenuCard>
        <MenuCard>앱 설정</MenuCard>
        <MenuCard>고객센터</MenuCard>
      </div>
    </div>
  );
}
