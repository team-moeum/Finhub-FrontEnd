"use client";

import { useRouter } from "next/navigation";
import style from "./LogOutButton.module.css";
import { deleteCookie } from "cookies-next";

export default function LogOutButton() {
  const router = useRouter();

  const handleClick = () => {
    deleteCookie("userInfo");
    deleteCookie("access-token");
    router.refresh();
  }
  return (
      <button 
        className={style.logout}
        onClick={handleClick}
      >로그아웃
      </button>
  )
}
