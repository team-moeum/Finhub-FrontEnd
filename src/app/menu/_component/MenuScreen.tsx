"use client";

import { useEffect, useState } from "react";
import { jsToNative } from "@/utils/jsToNative";
import { useIsLoginCsr } from "@/utils/auth_client";

import LoginBox from "@/app/_component/Menu/LoginBox";
import MenuCard from "@/app/_component/Menu/MenuCard";
import LogOutButton from "./LogOutButton";
import { AppContainer, Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { Text } from '@/components/Text';


export default function MenuPage() {
  const isLogin = useIsLoginCsr();
  const [currentVersion, setCurrentVersion] = useState("");
  const [recentVersion, setRecentVersion] = useState("");

  useEffect(() => {
    jsToNative({ val1: "appVersion" }, (data: any) => {
      setCurrentVersion(data.detail);
    });
    // TODO
    setRecentVersion("1.0.0");
  }, []);

  return (
    <AppContainer>
      <LoginBox isLogin={isLogin} />

      <Container mt={30} mb={100}>
        <MenuCard href="/menu/announcement">공지사항</MenuCard>
        <MenuCard href="/menu/theme">테마</MenuCard>
        {isLogin && <MenuCard href="/menu/alarm">알림</MenuCard>}
      </Container>

      <Container variant='thick'>
        <Box>
          <Text size={16} weight={400} color='#A6ABAF'>버전 현재 {currentVersion} / 최신 {recentVersion}</Text>
        </Box>

        <Box mt={20}>
          {isLogin && <LogOutButton />}
        </Box>
      </Container>
    </AppContainer>
  );
}
