import { Button } from "@/components/Button";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { MissedQuiz } from "@/model/missedQuiz";
import { SolvedQuiz } from "@/model/solvedQuiz";
import { Text } from "@/components/Text";

import QuizListItemIcon from '@/public/quiz/quiz_icon_list.svg';
import { LinkButton } from "@/components/LinkButton";


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
    <Button full height={60} radius={10} backgroundColor='#F9FAFA' onClick={onClick}>
      <FlexBox width='100%' px={16} gap={12} justifyContent='flex-start'>
        <QuizListItemIcon />
        <Stack gap={4}>
          <Text textAlign='left' size={15} weight={500} color='#494F54'>{item.question}</Text>
          <Text textAlign='left' size={10} weight={400} color='#CDD1D5'>{item.targetDate}</Text>
        </Stack>
      </FlexBox>
    </Button>
  )
}