"use client";

import {useRouter} from "next/navigation";
import style from "./Nav.module.css";

export default function BackButton() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  }

  return (
    <button className={style.close_button} onClick={onClickClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
          <path d="M12 2L2 12L12 22" stroke="#AAA9A3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}