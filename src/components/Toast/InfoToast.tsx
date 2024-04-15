import { Toast } from "./Toast"
import * as S from "./Toast.style";

export const InfoToast = ({ text }: { text: string }) => {
  return (
    <Toast>
      <S.ScrapToastWrap>
        <S.ScrapToastTextBox>
          {text}
        </S.ScrapToastTextBox>
      </S.ScrapToastWrap>
    </Toast>
  )
}