'use client';

import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { AppContainer, Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { LinkButton } from '@/components/LinkButton';
import { Text } from '@/components/Text';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container1 = styled.div`
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
    <AppContainer>
      <Container>
        <FlexBox height='calc(100vh - 54px)' direction='column' justifyContent='space-around'>
          <Text size={24} weight={600} color='#7B8287'>페이지를 찾을 수 없습니다.</Text>

          <Image
            src='/images/not_found_img.png'
            alt='Not Found'
            width={340}
            height={224}
            priority
          />

          <LinkButton width='100%' href='/'>
            <FlexBox width='100%' height={55} backgroundColor='#50BF50' radius={12}>
              <Text size={16} weight={700} color='#FFFFFF'>홈으로</Text>
            </FlexBox>
          </LinkButton>
        </FlexBox>
      </Container>
    </AppContainer>
  )
}