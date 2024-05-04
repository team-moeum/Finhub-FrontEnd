import styled from '@emotion/styled';

export const ScrapToast = () => {
  return (
    <ScrapToastWrap>
      <ScrapToastTextBox>
        <p>✍️ 메뉴 - <strong>스크랩 목록</strong>에 <strong>추가</strong>되었어요!</p>
      </ScrapToastTextBox>
    </ScrapToastWrap>
  )
}

export const ScrapToastWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`

export const ScrapToastTextBox = styled.div`
    flex: 1;
`