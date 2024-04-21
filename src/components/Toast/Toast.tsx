"use client"

import { ReactNode } from "react";
import * as S from "./Toast.style";

export type ToastProps = {
    children?: ReactNode,
    radius?: number,
    padding?: string,
}

export const Toast = ({radius, padding, children}: ToastProps) => {
    return (
        <S.ToastWrap
            initial={{ y: 100, opacity: 0, scale: 0.94 }} 
            animate={{ y: 0, opacity: 0.7, scale: 1, transition: {duration: 0.35, ease: 'easeOut'} }}
            exit={{ y: 100, opacity: 0, transition: {duration: 0.2, ease: 'easeIn'} }}
        >
            <S.ToastContent style={{borderRadius: radius, padding}}>
                {children}
            </S.ToastContent>
        </S.ToastWrap>
    )
}