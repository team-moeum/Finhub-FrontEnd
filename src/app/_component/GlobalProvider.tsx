"use client";

import { ReactNode } from "react";
import { useAutoLogin } from "@/hooks/useAutoLogin";


export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  useAutoLogin();

  return <>{children}</>;
}