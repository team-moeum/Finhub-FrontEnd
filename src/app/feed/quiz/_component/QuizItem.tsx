import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { MissedQuiz } from "@/model/missedQuiz";
import { SolvedQuiz } from "@/model/solvedQuiz";
import { Text } from "@/components/Text";
import { LinkButton } from "@/components/LinkButton";
import { Box } from "@/components/Box";
import { PressButton } from "@/components/PressAnimator";

import QuizListItemIcon from '@/public/quiz/quiz_icon_list.svg';

export const NoQuizItem = ({ text }: { text: string }) => {
  return (
    <FlexBox width='100%' height={60} radius={10} backgroundColor='#F9FAFA'>
      <Text size={15} weight={500} color='#7B8287'>{text}</Text>
    </FlexBox>
  )
}

export const QuizDetailButton = () => {
  return (
    <LinkButton href={`/feed/quiz/detail`}>
      <FlexBox height={36} backgroundColor="#F6F7F9" radius={10}>
        <Text size={15} weight={600} color="#A6ABAF">더보기</Text>
      </FlexBox>
    </LinkButton>
  )
}

export const QuizItem = ({
  item,
  onClick
}: {
  item: MissedQuiz | SolvedQuiz,
  onClick?: () => void;
}) => {
  return (
    <PressButton onClick={onClick}>
      <Box height={60} radius={10} backgroundColor='#F9FAFA'>
        <FlexBox width="100%" height='100%' px={16} gap={12} justifyContent='flex-start'>
          <FlexBox flex='auto 0 0' width={25} height={23}>
            <QuizListItemIcon />
          </FlexBox>
          <Stack gap={4}>
            <Text textAlign='left' size={15} weight={500} color='#494F54' textLineClamp={1}>{item.question}</Text>
            <Text textAlign='left' size={10} weight={400} color='#CDD1D5'>{item.targetDate}</Text>
          </Stack>
        </FlexBox>
      </Box>
    </PressButton>
  )
}