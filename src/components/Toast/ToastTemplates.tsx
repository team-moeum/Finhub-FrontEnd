'use client';

import styled from '@emotion/styled';

import SuccessIcon from '@/public/icons/toast_check_icon.svg';
import ErrorIcon from '@/public/icons/toast_error_icon.svg';
import WarningIcon from '@/public/icons/toast_warning_icon.svg';
import { FlexBox } from '../FlexBox';
import { ToastType } from '@/states/client/atoms/toast';
import ToastCheckIcon from '@/public/icons/toast_check_icon.svg';
import { Stack } from '../Stack';

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
    <FlexBox gap={14} justifyContent='flex-start' position='relative'>
      <ToastCheckIcon />
      <TextWrap>
        <Stack>
          <TextItemWrap>
            없는 단어를 요청했어요.
          </TextItemWrap>
          <TextItemWrap>
            핀허브가 빠르게 검수 후 반영할게요!🫡
          </TextItemWrap>
        </Stack>
      </TextWrap>
    </FlexBox>
  )
}

const NotWordDuplicate = () => {
  return (
    <FlexBox gap={14} justifyContent='flex-start' position='relative'>
      <WarningIcon />
      <TextWrap>
        <Stack>
          <TextItemWrap weight={600}>
            다른 사람이 이미 요청한 단어예요.
          </TextItemWrap>
          <TextItemWrap>
            검수 중이니 조금만 기다려주세요! 🕒
          </TextItemWrap>
        </Stack>
      </TextWrap>
    </FlexBox>
  )
}

const NotWordOneTime = () => {
  return (
    <FlexBox gap={14} justifyContent='flex-start' position='relative'>
      <WarningIcon />
      <TextWrap >
        <Stack>
          <TextItemWrap weight={600}>
            요청은 단어 당 1회만 가능해요.
          </TextItemWrap>
          <TextItemWrap>
            이 단어는 이미 요청하신 단어예요. 😓
          </TextItemWrap>
        </Stack>
      </TextWrap>
    </FlexBox>
  )
}

const TypeToast = ({ type, content }: Partial<ToastType>) => {
  if (type === "success") return (
    <FlexBox justifyContent='flex-start' gap={12}>
      <SuccessIcon />
      {content}
    </FlexBox>
  )

  if (type === "error") return (
    <FlexBox justifyContent='flex-start' gap={12}>
      <ErrorIcon />
      {content}
    </FlexBox>
  )

  if (type === "warning") return (
    <FlexBox justifyContent='flex-start' gap={12}>
      <WarningIcon />
      {content}
    </FlexBox>
  )
}

export {
  NotWordSuccess,
  NotWordDuplicate,
  NotWordOneTime,
  TypeToast
}