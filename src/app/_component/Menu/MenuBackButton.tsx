"use client";

import { useRouter } from "next/navigation";

import style from "./MenuBackButton.module.css";

export default function MenuBackButton() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  return (
    <button className={style.close_button} onClick={onClickClose}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path
          d="M7 1L1 7L7 13"
          stroke="#979797"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
