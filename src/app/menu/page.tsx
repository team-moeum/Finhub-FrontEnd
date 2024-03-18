import { Metadata } from "next";
import style from "./menu.module.css";
import LoginBox from "../_component/Menu/LoginBox";
import MenuCard from "../_component/Menu/MenuCard";
import LogOutButton from "./_component/LogOutButton";
import { getUserInfo } from "@/utils/auth";

export const metadata: Metadata = {
  title: "Menu",
};

export default async function MenuPage() {
  const userInfo = getUserInfo();

  return (
    <div className={style.container}>
      <LoginBox userInfo={userInfo}/>
      <div className={style.content}>
        <MenuCard href="/menu">공지사항</MenuCard>
        <MenuCard href="/menu">공지사항</MenuCard>
        <MenuCard href="/menu">공지사항</MenuCard>
      </div>
      {userInfo && <LogOutButton />}
    </div>
  );
}
