"use client";

import style from "./LogOutButton.module.css";
import { useRouter } from "next/navigation";

import { authAPI } from "@/api/auth";

export default function LogOutButton() {
  const router = useRouter();
  const logout = authAPI.useLogout();

  const handleLogout = () => {
    logout();
    router.refresh();
  };
  
  return (
      <button 
        className={style.logout}
        onClick={handleLogout}
      >로그아웃
      </button>
  )
}

