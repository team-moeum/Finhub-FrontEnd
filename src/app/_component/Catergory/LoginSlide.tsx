"use client";

import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { useRouter } from "next/navigation";

type LoginSlideProps = {
  show: boolean
  onClose: () => void
}

export const LoginSlide = ({show, onClose}: LoginSlideProps) => {
  const router = useRouter();

  const handleLoginBtnClick = () => {
    onClose();
    router.push('/login');
  }
  return (
    <BottomSheet isOpen={show} onClose={onClose}>
      <Container variant="thick">
        <FlexBox direction='column' mt={46} mb={31}>
          <Stack gap={10}>
            <Text textAlign="center" lineHeight={1.5} size={20} weight={600} color="#191B1C">로그인이 필요한<br />서비스입니다.</Text>
            <Text size={16} weight={400} color="#494F54">로그인 후 다양한 기능을 이용해보세요!</Text>  
          </Stack>

          <FlexBox mt={34} gap={12} width='100%'>
            <Button
              flex={1}
              px={26}
              height={50}
              backgroundColor="#F6F7F9"
              radius={10}
              onClick={onClose}
            >
              <Text size={16} weight={600} color="#CDD1D5">다음에 할게요</Text>
            </Button>
            <Button
              flex={1}
              px={26}
              height={50}
              backgroundColor="#50BF50"
              radius={10}
              onClick={handleLoginBtnClick}
            >
              <Text size={16} weight={600} color="#FFFFFF">로그인 하기</Text>
            </Button>
          </FlexBox>
        </FlexBox>
      </Container>
    </BottomSheet>
  )
}