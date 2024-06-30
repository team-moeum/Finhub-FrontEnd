"use client";

import { useClearLockScroll } from "@/hooks/useLockScroll";

export const GlobalProvider = () => {
  useClearLockScroll();

  return null;
}