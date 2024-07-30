"use client";

import style from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { APPLE_AUTH_URL, GOOGLE_AUTH_URL, KAKAO_AUTH_URL } from "@/configs";
import cx from 'classnames';

export default function LoginPage() {
  return (
    <div className={style.container}>
      <div className={style.app_icon_box}>
        <Image
          src="/finhub_app_icon.svg"
          alt="finhub app icon"
          width={100}
          height={100}
        />
        <Image
          src="/finhub_logo_green.svg"
          alt="finhub logo"
          width={100}
          height={30}
        />
        <p className={style.text}>쉬운 금융 지식 서비스 핀허브</p>
      </div>
      <div className={style.button_area}>
        <Link href={KAKAO_AUTH_URL} className={cx([style.login_button, style.kakao_login])}>
          <Image
            className={style.login_icon}
            src="/icons/kakao.svg"
            alt="kakao icon"
            width={18}
            height={18}
          />
          카카오로 로그인
        </Link>
        <Link href={GOOGLE_AUTH_URL} className={cx([style.login_button, style.google_login])}>
          <Image
            className={style.login_icon}
            src="/icons/google.svg"
            alt="google icon"
            width={18}
            height={18}
          />
          Google로 로그인
        </Link>
        {/* <Link href={APPLE_AUTH_URL} className={cx([style.login_button, style.apple_login])}>
          <Image
            className={style.login_icon}
            src="/icons/apple.svg"
            alt="apple icon"
            width={18}
            height={18}
          />
          Apple로 로그인
        </Link> */}
        <Link href="/" className={style.not_login}>
          로그인 없이 둘러보기
        </Link>
      </div>
    </div>
  );
}
