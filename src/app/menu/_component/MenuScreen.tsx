"use client";

import { useEffect, useState } from "react";
import { isAndroid, isIos, jsToNative } from "@/utils/jsToNative";
import { isLoggedIn } from "@/utils/auth_client";
import Link from "next/link";

import LoginBox from "@/app/_component/Menu/LoginBox";
import MenuCard from "@/app/_component/Menu/MenuCard";
import LogOutButton from "./LogOutButton";
import { AppContainer, Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { Text } from '@/components/Text';
import { AppBar } from "@/components/AppBar";

import BellIcon from '@/public/icons/bell_gray_ico.svg';


export default function MenuPage() {
  const isLogin = isLoggedIn();
  const [currentVersion, setCurrentVersion] = useState("");
  const [recentVersion, setRecentVersion] = useState("");

  useEffect(() => {
    jsToNative({ val1: "appVersion" }, (data: any) => {
      setCurrentVersion(data.detail);
    });
    jsToNative({ val1: "getRemoteConfig" }, (data: any) => {
      if (!data.detail) return;

      const { result, config } = JSON.parse(data.detail);
      if (result !== "success") return;

      if (isAndroid()) {
        setRecentVersion(config.android_version);
      } else if (isIos()) {
        setRecentVersion(config.ios_version);
      }
    });
  }, []);

  return (
    <AppContainer footer>
      <AppBar 
        title="메뉴"
        backgroundColor="#F6F7F9"
      >
        {isLogin && 
          <Link href='/notify'>
            <BellIcon />
          </Link>
      }
      </AppBar>
      <LoginBox isLogin={isLogin} />

      <Container mt={30} mb={100}>
        <MenuCard href="/menu/announcement">공지사항</MenuCard>
        <MenuCard href="/menu/termsPolicy">약관 및 정책</MenuCard>
        {/* <MenuCard href="/menu/theme">테마</MenuCard> */}
        {isLogin && <MenuCard href="/menu/alarm">알림</MenuCard>}
      </Container>

      <Container variant="thick" pb={30}>
        <Box>
          <Text size={16} weight={400} color="#A6ABAF">
            버전 현재 {currentVersion} / 최신 {recentVersion}
          </Text>
        </Box>

        <Box mt={20}>{isLogin && <LogOutButton />}</Box>
      </Container>
    </AppContainer>
  );
}
