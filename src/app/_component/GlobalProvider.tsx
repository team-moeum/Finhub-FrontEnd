"use client";

import { ReactNode } from "react";
import { useAutoLogin } from "@/hooks/useAutoLogin";
import { useSafeAreaTop } from "@/hooks/useSafeAreaTop";


export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  useAutoLogin();
  useSafeAreaTop();

  return <>{children}</>;
}