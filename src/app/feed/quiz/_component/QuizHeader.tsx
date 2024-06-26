"use client";

import { Container } from "@/components/Container";
import { FlexRow } from "@/components/FlexRow";
import { Text } from "@/components/Text";
import { LinkButton } from "@/components/LinkButton";
import { Box } from "@/components/Box";

export default function QuizHeader() {
  return (
    <Container>
      <FlexRow height={65}>
        <Text size={18} weight={700} color="#000000">오늘의 퀴즈!</Text>
        <LinkButton href={'/feed/quiz'}>
          <Box radius={10} backgroundColor="#f6f7f9" pt={4} pb={6} px={12}>
            <Text size={12} weight={700} color="#7B8287">지난 퀴즈 보기</Text>
          </Box>
        </LinkButton>
      </FlexRow>
    </Container>
  )
}