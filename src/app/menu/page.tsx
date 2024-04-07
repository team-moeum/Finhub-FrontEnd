import { Metadata } from "next";
import style from "./menu.module.css";
import LoginBox from "../_component/Menu/LoginBox";
import MenuCard from "../_component/Menu/MenuCard";
import LogOutButton from "./_component/LogOutButton";

export const metadata: Metadata = {
  title: "Menu",
};

const userInfo = {
  name: "손주형",
  email: "test@naver.com"
}

const isLogin = false;
const currentVersion = "1.0.0";
const recentVersion = "1.0.0";

export default async function MenuPage() {

  return (
    <div className={style.container}>
      <LoginBox userInfo={userInfo}/>
      <div className={style.content}>
        <MenuCard href="/menu">공지사항</MenuCard>
        <MenuCard href="/menu/theme">테마</MenuCard>
        {isLogin && <MenuCard href="/menu/alarm">알림</MenuCard>}
      </div>
      <div className={style.version_area}>
        버전 현재 {currentVersion} / 최신 {recentVersion}
      </div>
      {/* {userInfo && <LogOutButton />} */}
    </div>
  );
}
