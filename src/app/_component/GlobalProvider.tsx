"use client";

import { ReactNode } from "react";
import { useAutoLogin } from "@/hooks/useAutoLogin";
import { useCacheControl } from "@/hooks/useCacheControl";


export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  useAutoLogin();
  useCacheControl();

  return <>{children}</>;
}