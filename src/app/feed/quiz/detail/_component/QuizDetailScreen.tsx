"use client"

import { AppBar } from "@/components/AppBar"
import { Box } from "@/components/Box"
import { AppContainer, Container } from "@/components/Container"

export const QuizDetailScreen = () => {
  return (
    <AppContainer header>
      <AppBar
        useLeftBack
        leftBackColor="black"
      />

      <Container mt={22}>
        <Box>Test</Box>
      </Container>
    </AppContainer>
  )
}
