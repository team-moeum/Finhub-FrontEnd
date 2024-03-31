import { Toast, ToastProps } from "./Toast"
import * as S from "./Toast.style";

type ScrapToastProps = {
    onClick: () => void
} & ToastProps

export const ScrapToast = ({onClick, ...props}: ScrapToastProps) => {
    return (
        <Toast {...props}>
            <S.ScrapToastWrap>
                <S.ScrapToastTextBox>
                    <p>✍️ 스크랩한 글은</p>
                    <p>메뉴-<strong>스크랩 목록</strong>에서 볼 수 있어요!</p>
                </S.ScrapToastTextBox>
                <S.ScrapToastButton onClick={onClick}>보러가기</S.ScrapToastButton>
            </S.ScrapToastWrap>
        </Toast>
    )
}