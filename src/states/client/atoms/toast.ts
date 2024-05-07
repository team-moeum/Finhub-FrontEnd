import { ToastProps } from "@/components/Toast/Toast";
import { ReactNode } from "react";
import { atom } from "recoil";

export type ToastType = {
  content: ReactNode,
  duration?: number,
} & ToastProps;

export const toastState = atom<ToastType>({
  key: "toastTextState",
  default: {content: "", duration: 3000}
})