"use client";

import { AnimatePresence } from "framer-motion";
import { Toast } from "./Toast";
import ToastPortal from "./ToastPortal";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toastState } from "@/states/client/atoms/toast";

export const ToastProvider = () => {
  const [show, setShow] = useState(false);
  const toast = useRecoilValue(toastState);

  useEffect(() => {
    if (toast.content) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, toast.duration);
    
      return () => clearTimeout(timer);
    }
  }, [toast])

  return (
    <AnimatePresence>
      {show && 
        <ToastPortal>
          <Toast {...toast}>
            {toast.content}
          </Toast>
        </ToastPortal>
      }
    </AnimatePresence>
  )
}