"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { Toast } from "./Toast";
import ToastPortal from "./ToastPortal";
import { TypeToast } from "./ToastTemplates";

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
  }, [toast]);

  return (
    <AnimatePresence>
      {show && (
        <ToastPortal>
          <Toast {...toast}>
            {toast.type ? <TypeToast type={toast.type} content={toast.content} /> : toast.content}
          </Toast>
        </ToastPortal>
      )}
    </AnimatePresence>
  );
};
