"use client";

import Link from "next/link";
import { useRecoilValue } from "recoil";

import style from "./PushMarketingOptIn.module.css";

import { userState } from "@/states/client/atoms/user";

import ArrowRightIcon from "@/public/icons/icon_arrow_right.svg";

export default function PushMarketingOptIn() {
  const userInfo = useRecoilValue(userState);

  return (
    <Link href="/menu/alarm/pushMarketingOptIn">
      <div className={style.container}>
        <span>마케팅 정보 수신 동의</span>
        <div className={style.link}>
          <div>{userInfo.pushYN ? "동의함" : "철회함"}</div>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}
