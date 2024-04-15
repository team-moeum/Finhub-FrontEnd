import style from "./menu.module.css";

import LoginBox from "../_component/Menu/LoginBox";
import MenuCard from "../_component/Menu/MenuCard";
import LogOutButton from "./_component/LogOutButton";
import { isUserLoginSsr } from "@/utils/auth_server";

const currentVersion = "1.0.0";
const recentVersion = "1.0.0";

export default async function MenuPage() {
  const isLogin = isUserLoginSsr();

  return (
    <div className={style.container}>
      <LoginBox isLogin={isLogin}/>
      <div className={style.content}>
        <MenuCard href="/menu">공지사항</MenuCard>
        <MenuCard href="/menu/theme">테마</MenuCard>
        {isLogin && <MenuCard href="/menu/alarm">알림</MenuCard>}
      </div>
      <div className={style.version_area}>
        버전 현재 {currentVersion} / 최신 {recentVersion}
      </div>
      {isLogin && <LogOutButton />}
    </div>
  );
}
