
'use client'

import Image from "next/image";
import { AppContainer, Container } from "@/components/Container"
import { FlexBox } from "@/components/FlexBox"
import { LinkButton } from "@/components/LinkButton"
import { Text } from "@/components/Text"
import { useEffect } from "react"

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <AppContainer>
      <Container>
        <FlexBox height='calc(100vh - 54px)' direction='column' justifyContent='space-around'>
          <FlexBox direction='column' gap={10}>
            <Text size={24} weight={600} color='#7B8287'>오류가 발생했어요.</Text>
            <Text size={16} weight={600} color='#7B8287'>지속적으로 발생 시 어플 문의 해주세요.</Text>
          </FlexBox>

          <Image
            src='/images/error.png'
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