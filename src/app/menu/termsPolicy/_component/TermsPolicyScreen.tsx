"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

import { useModal } from "@/hooks/useModal";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Popup } from "@/components/Popup";
import { PressBox } from "@/components/PressAnimator";
import { Text } from "@/components/Text";

export const EXTERNAL_URL = {
  privacyPolicy: "https://lemon-mosquito-5dc.notion.site/393b108e85c84e6c9e5c173766b5ef5a?pvs=74",
  termsOfUse: "https://lemon-mosquito-5dc.notion.site/4675ba5efe7b4ffab2787ca4d192258c"
};

export const TermsPolicyScreen = () => {
  const [targetExternalUrl, setTargetExternalUrl] = useState("");

  const router = useRouter();
  const externalLinkModal = useModal();

  const handleClickExternalLink = (url: string) => {
    setTargetExternalUrl(url);
    externalLinkModal.open();
  };

  const handleOkExternalLinkPopup = () => {
    externalLinkModal.close();
    router.push(targetExternalUrl);
  };

  return (
    <Fragment>
      <Container pb={26}>
        <PressBox onClick={() => handleClickExternalLink(EXTERNAL_URL.privacyPolicy)}>
          <FlexBox height={54} justifyContent="flex-start">
            <Text size={16} weight={500} color="#191B1C">
              개인정보처리방침
            </Text>
          </FlexBox>
        </PressBox>
        <PressBox onClick={() => handleClickExternalLink(EXTERNAL_URL.termsOfUse)}>
          <FlexBox height={54} justifyContent="flex-start">
            <Text size={16} weight={500} color="#191B1C">
              이용약관
            </Text>
          </FlexBox>
        </PressBox>
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
    </Fragment>
  );
};
