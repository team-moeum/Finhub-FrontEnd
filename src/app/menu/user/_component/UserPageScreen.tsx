"use client";

import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

import MenuCard from "@/app/_component/Menu/MenuCard";

import ProfileAvatar from "./ProfileAvatar";

import { userState } from "@/states/client/atoms/user";

import { AppBar } from "@/components/AppBar";
import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

export const UserPageScreen = () => {
  const router = useRouter();
  const userInfo = useRecoilValue(userState);

  const handleClickWithdraw = () => {
    router.push("/menu/user/withdraw");
  };

  return (
    <AppContainer>
      <AppBar useLeftBack title="프로필" />
      <Container width="100%">
        <FlexBox mt={30} mb={44}>
          <ProfileAvatar />
        </FlexBox>
      </Container>

      <Stack mt={30} gap={10}>
        <MenuCard href="/menu/user/name">닉네임 변경</MenuCard>
        <MenuCard href="/menu/user/email">이메일 설정</MenuCard>
        <MenuCard href="/menu/user/usertype">직업 설정</MenuCard>
      </Stack>

      <Container mt={44}>
        <Box position="fixed" bottom={100} onClick={handleClickWithdraw}>
          <Text size={12} weight={600} color="rgba(232, 59, 59, 0.80)">
            탈퇴하기
          </Text>
        </Box>
      </Container>
    </AppContainer>
  );
};
