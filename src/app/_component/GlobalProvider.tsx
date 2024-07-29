"use client";

import { ReactNode, useEffect } from "react";
import { useAutoLogin } from "@/hooks/useAutoLogin";
import { FHEventBus } from "@/utils/jsToNative";


export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  useAutoLogin();

  useEffect(() => {
    new FHEventBus().on("pushAction", (e: any) => {
      console.log(e.detail);
    })
  }, [])

  return <>{children}</>;
}