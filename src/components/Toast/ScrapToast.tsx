import { Toast, ToastProps } from "./Toast"
import * as S from "./Toast.style";

type ScrapToastProps = {
    onClick?: () => void
} & ToastProps

export const ScrapToast = ({onClick, ...props}: ScrapToastProps) => {
    return (
        <Toast {...props}>
            <S.ScrapToastWrap>
                <S.ScrapToastTextBox>
                    <p>✍️ 메뉴 - <strong>스크랩 목록</strong>에 <strong>추가</strong>되었어요!</p>
                </S.ScrapToastTextBox>
            </S.ScrapToastWrap>
        </Toast>
    )
}