import styled from "@emotion/styled";

import { FlexBox } from "../FlexBox";

import ToastCheckIcon from "@/public/icons/toast_check_icon.svg";

import { Text } from "@/components/Text";

export const ScrapToast = () => {
  return (
    <ScrapToastWrap>
      <ScrapToastTextBox>
        <FlexBox justifyContent="flex-start" gap={12}>
          <ToastCheckIcon />
          <Text size={16} weight={500} color="#FFF">
            메뉴 - 스크랩 목록에 추가되었어요!
          </Text>
        </FlexBox>
      </ScrapToastTextBox>
    </ScrapToastWrap>
  );
};

export const ScrapToastWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`;

export const ScrapToastTextBox = styled.div`
    flex: 1;
`;
