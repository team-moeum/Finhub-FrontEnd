import { ReactNode } from "react";
import { atom } from "recoil";

import { ToastProps } from "@/components/Toast/Toast";

export type ToastType = {
  content: ReactNode;
  type?: "success" | "error" | "warning";
  duration?: number;
} & ToastProps;

export const toastState = atom<ToastType>({
  key: "toastTextState",
  default: { content: "", type: undefined, duration: 3000 }
});
