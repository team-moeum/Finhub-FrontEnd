"use client";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { FlexBox } from "@/components/FlexBox";
import { Popup } from "@/components/Popup";
import { Text } from "@/components/Text";
import { useQuiz } from "@/states/server/queries";
import Image from "next/image";

type TodayQuizPopupProps = {
  show: boolean,
  date: string,
  onAnswerClick: (id: number, answer: "O" | "X") => void,
  onClose: () => void
}

export const TodayQuizPopup = ({
  show,
  date,
  onAnswerClick,
  onClose,
}: TodayQuizPopupProps) => {
  const formattedDate = date.replace(/-/g, '');

  const { data: todayQuiz } = useQuiz(formattedDate);
  
  return (
    <Popup show={show} onClose={onClose} custom>
      <Box
        backgroundColor="#FFF"
        radius={20}
        py={20}
        px={20}
      >
        <FlexBox direction='column'>
          <Image
            src='/quiz/quiz_icon.svg'
            alt='quiz_icon'
            width={52}
            height={62}
          />

          <Box mt={14}>
            <Text size={18} weight={600} lineHeight={1.4} color='#494F54'>{todayQuiz.question}</Text>
          </Box>

          <FlexBox mt={25} gap={16} width='100%'>
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor='#197EF6'
              onClick={() => onAnswerClick(todayQuiz.id, "O")}
            >
              <Text size={30} weight={400} color='#FFF'>O</Text>
            </Button>
            <Button
              flex={1}
              height={44}
              radius={10}
              backgroundColor='#E83B3B'
              onClick={() => onAnswerClick(todayQuiz.id, "X")}
            >
              <Text size={30} weight={400} color='#FFF'>X</Text>
            </Button>
          </FlexBox>
        </FlexBox>
      </Box>
    </Popup>
  )
}