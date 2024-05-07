'use client';

import styled from '@emotion/styled';

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const TextItemWrap = styled.p<{ weight?: number }>`
  font-weight: ${({ weight }) => weight || 400};
`

const NotWordSuccess = () => {
  return (
    <TextWrap>
      <TextItemWrap weight={600}>
        없는 단어를 요청했어요.
      </TextItemWrap>
      <TextItemWrap>
        핀허브가 빠르게 검수 후 반영할게요! 🫡
      </TextItemWrap>
    </TextWrap>
  )
}

const NotWordDuplicate = () => {
  return (
    <TextWrap>
      <TextItemWrap weight={600}>
        다른 사람이 이미 요청한 단어예요.
      </TextItemWrap>
      <TextItemWrap>
        검수 중이니 조금만 기다려주세요! 🕒
      </TextItemWrap>
    </TextWrap>
  )
}

const NotWordOneTime = () => {
  return (
    <TextWrap>
      <TextItemWrap weight={600}>
        요청은 단어 당 1회만 가능해요.
      </TextItemWrap>
      <TextItemWrap>
        이 단어는 이미 요청하신 단어예요. 😓
      </TextItemWrap>
    </TextWrap>
  )
}

export {
  NotWordSuccess,
  NotWordDuplicate,
  NotWordOneTime
}