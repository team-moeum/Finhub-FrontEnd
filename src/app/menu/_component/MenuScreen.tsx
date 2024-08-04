"use client";

import { useEffect, useState } from "react";
import { isAndroid, isIos, jsToNative } from "@/utils/jsToNative";
import { isLoggedIn } from "@/utils/auth_client";

import LoginBox from "@/app/_component/Menu/LoginBox";
import MenuCard from "@/app/_component/Menu/MenuCard";
import LogOutButton from "./LogOutButton";
import { AppContainer, Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { Text } from '@/components/Text';
import { AppBar } from "@/components/AppBar";

import BellIcon from '@/public/icons/bell_gray_ico.svg';
import { Popup } from "@/components/Popup";
import { useModal } from "@/hooks/useModal";
import { FlexBox } from "@/components/FlexBox";
import { useRouter } from "next/navigation";

const EXTERNAL_URL = {
  privacyPolicy: "https://lemon-mosquito-5dc.notion.site/393b108e85c84e6c9e5c173766b5ef5a?pvs=74",
  termsOfUse:  "https://lemon-mosquito-5dc.notion.site/4675ba5efe7b4ffab2787ca4d192258c",
}

export default function MenuPage() {
  const isLogin = isLoggedIn();
  const [currentVersion, setCurrentVersion] = useState("");
  const [recentVersion, setRecentVersion] = useState("");
  const [targetExternalUrl, setTargetExternalUrl] = useState("");

  const router = useRouter();
  const externalLinkModal = useModal();

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

  const handleClickExternalLink = (url: string) => {
    setTargetExternalUrl(url);
    externalLinkModal.open();
  }

  const handleOkExternalLinkPopup= () => {
    externalLinkModal.close();
    router.push(targetExternalUrl);
  }

  return (
    <AppContainer footer>
      <AppBar 
        title="메뉴"
        backgroundColor="#F6F7F9"
      >
        {isLogin && <BellIcon />
      }
      </AppBar>
      <LoginBox isLogin={isLogin} />

      <Container mt={30} mb={100}>
        <MenuCard href="/menu/announcement">공지사항</MenuCard>
        <MenuCard onClick={() => handleClickExternalLink(EXTERNAL_URL.privacyPolicy)}>개인정보처리방침</MenuCard>
        <MenuCard onClick={() => handleClickExternalLink(EXTERNAL_URL.termsOfUse)}>이용약관</MenuCard>
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

      <Popup
        show={externalLinkModal.show}
        onClose={externalLinkModal.close}
        leftButtonText="취소" 
        rightButtonText="확인"
        onLeftClick={externalLinkModal.close}
        onRightClick={handleOkExternalLinkPopup}
      >
        <FlexBox direction="column" gap={6}>
          <Text size={16}>외부 링크로 이동하시겠습니까?</Text>
        </FlexBox>
      </Popup>
    </AppContainer>
  );
}
