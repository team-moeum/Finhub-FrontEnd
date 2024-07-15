"use client"

import { ReactNode } from "react"
import * as S from "./BottomSheet.style"
import { useLockScroll } from "@/hooks/useLockScroll";
import { AnimatePresence } from "framer-motion";
import ModalPortal from "../Modal/ModalPortal";

type Props = {
  title?: string;
  radius?: number;
  children: ReactNode;
  isOpen: boolean;
  onClose: (e?: React.MouseEvent) => void;
}

export const BottomSheet = ({ 
  title, 
  radius, 
  isOpen, 
  onClose, 
  children 
}: Props) => {

  useLockScroll({locked: isOpen});

  if (!isOpen) return <></>;
  return (
    <ModalPortal>
      <AnimatePresence>
        <S.BackgroundOverlay
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        <S.container
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 120 }}
          radius={radius}
        >
          {title &&
            <S.header>
              <S.title>{title}</S.title>
              <S.closeBtn onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M1 1L13 13" stroke="#A7A6A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </S.closeBtn>
            </S.header>
          }
          <S.content>
            {children}
          </S.content>
        </S.container>
      </AnimatePresence>
    </ModalPortal>
  )
}