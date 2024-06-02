'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

import LinkButton from '@/components/Button/LinkButton';

const Text = styled.p`
  color: #7B8287;
  font-size: 24px;
  font-weight: 600;
`

const Container = styled.div`
  padding: 20px 10px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default function NotFound() {
  return (
    <Container>
      <Text>페이지를 찾을 수 없습니다.</Text>
      <Image
        src='/images/not_found_img.png'
        alt='Not Found'
        width={340}
        height={224}
        priority
      />
      <LinkButton
        tag="button"
        type="contained"
        href="/home"
        width='100%'
        height={55}
        ripple
        animate
        background='#50BF50'
        style={{
          fontSize: 16,
          fontWeight: 700
        }}
      >
        홈으로
      </LinkButton>
    </Container>
  )
}