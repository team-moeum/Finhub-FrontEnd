"use client"

import { ReactNode, useEffect, useState } from "react"
import * as S from "./BottomSheet.style"

type Props = {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const BottomSheet = ({title, isOpen, onClose, children} : Props) => {

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
      
        if (isOpen) {
          html.style.overflow = 'hidden';
          body.style.overflow = 'hidden';
        } else {
          html.style.overflow = '';
          body.style.overflow = '';
        }
      
        return () => {
          html.style.overflow = '';
          body.style.overflow = '';
        };
      }, [isOpen]);

    return (
        <>
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
            >
                <S.header>
                    <S.title>{title}</S.title>
                    <S.closeBtn onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M1 13L13 1M1 1L13 13" stroke="#A7A6A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </S.closeBtn>
                </S.header>
                <S.content>
                    {children}
                </S.content>
            </S.container>
        </>
    )
}