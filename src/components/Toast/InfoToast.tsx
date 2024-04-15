"use client";

import { useRecoilState } from "recoil";
import { Toast } from "./Toast"
import * as S from "./Toast.style";
import { toastTextState } from "@/states/client/atoms/toastText";

export const InfoToast = ({ text }: { text?: string }) => {
  const [toastText, _] = useRecoilState(toastTextState);

  return (
    <Toast>
      <S.ScrapToastWrap>
        <S.ScrapToastTextBox>
          {text || toastText}
        </S.ScrapToastTextBox>
      </S.ScrapToastWrap>
    </Toast>
  )
}