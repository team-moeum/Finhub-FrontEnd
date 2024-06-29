"use client"

import { AppBar } from "@/components/AppBar"
import { Box } from "@/components/Box"
import { AppContainer, Container } from "@/components/Container"
import { Toggle } from "@/components/Toggle"
import { useState } from "react"
import { useQuizListData } from "../../_hooks/useQuizListData"
import moment from "moment"

const SELECTED_TYPE = {
  missed: 0,
  solved: 1
} as const;

export const QuizDetailScreen = () => {
  const requestDate = moment().format("YYYYMMDD");
  
  const [selectedValue, setSelectedValue] = useState<number>(SELECTED_TYPE.missed);

  const {
    isLoading,
    missedQuizList,
    solvedQuizList
  } = useQuizListData({ requestDate: requestDate });

  return (
    <AppContainer header>
      <AppBar
        useLeftBack
        leftBackColor="black"
      />

      <Container mt={22}>
        <Toggle
          data={[
            { text: '놓친 퀴즈', value: SELECTED_TYPE.missed },
            { text: '풀었던 퀴즈', value: SELECTED_TYPE.solved },
          ]}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />

        <Box>Test</Box>
      </Container>
    </AppContainer>
  )
}
