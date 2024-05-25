"use client";

import style from "./menu.module.css";

import LoginBox from "../_component/Menu/LoginBox";
import MenuCard from "../_component/Menu/MenuCard";
import LogOutButton from "./_component/LogOutButton";
import { isUserLoginSsr } from "@/utils/auth_server";
import { useEffect, useState } from "react";
import { jsToNative } from "@/utils/jsToNative";

export default function MenuPage() {
  const isLogin = isUserLoginSsr();
  const [currentVersion, setCurrentVersion] = useState("");
  const [recentVersion, setRecentVersion] = useState("");

  useEffect(() => {
    jsToNative({ val1: "appVersion" }, (data: any) => {
      setCurrentVersion(data.detail);
    });
    // TODO
    setRecentVersion("1.0.0");
  }, []);

  return (
    <div className={style.container}>
      <LoginBox isLogin={isLogin} />
      <div className={style.content}>
        <MenuCard href="/menu/announcement">공지사항</MenuCard>
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
