"use client";

import { Box } from "@/components/Box"
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { Stack } from "@/components/Stack"
import { Text } from "@/components/Text"
import { userState } from "@/states/client/atoms/user";
import { useQuitReasons } from "@/states/server/queries";
import { Fragment, useState } from "react"
import { useRecoilValue, useResetRecoilState } from "recoil";

import RadioIcon from '@/public/icons/radio.svg';
import RadioOnIcon from '@/public/icons/radio_on.svg';
import { QuitReason } from "@/model/QuitReasons";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { usePostQuit } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";
import { deleteToken } from "@/utils/auth_client";
import { useQueryClient } from "@tanstack/react-query";

const WithdrawRadioItem = ({
  selectedId,
  reason,
  onClick
}: {
  selectedId: number, 
  reason: QuitReason,
  onClick: () => void;
}) => {
  return (
    <FlexBox width='100%' height={40} onClick={onClick}>
      <FlexRow>
        <Text size={16} weight={500} color="#25292C">{reason.reason}</Text>
        {reason.id === selectedId 
          ? <RadioOnIcon />
          : <RadioIcon />
        }
      </FlexRow>
    </FlexBox>
  )
}

export const WithdrawPageScreen = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const userInfo = useRecoilValue(userState);
  const resetUserInfo = useResetRecoilState(userState);

  const [selectedId, setSelectedId] = useState(1);

  const { data: quitReasons } = useQuitReasons();
  const postQuitMutation = usePostQuit({
    onSuccess: () => {
      /** 
       * 회원 탈퇴에 따른 fe 정보 삭제 
      **/
      deleteToken();
      resetUserInfo();
      queryClient.clear();
      
      router.replace('/menu');
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요.", type: 'warning' });
    }
  })

  const handleItemClick = (id: number) => setSelectedId(id);
  const handleCancleClick = () => router.back();
  const handleQuitClick = () => {
    postQuitMutation.mutate({
      id: selectedId, 
      reason: quitReasons.find(item => item.id === selectedId)?.reason || ""
    });
  }

  return (
    <Fragment>
      <Stack gap={15}>
        <Text size={16} weight={500} color="#25292C">탈퇴 유의사항</Text>
        <Text size={14} weight={500} color="#A6ABAF">
          {userInfo.nickname}님, 그동안 핀허브를 이용해주셔서 감사합니다.<br /><br />
          {userInfo.nickname}님께서 저희 서비스 사용중 불편하셨던 점을 공유해주시면 저희에게는 큰 힘이 됩니다. 감사합니다.
        </Text>
      </Stack>
      <Box mt={32} mb={32}>
        <Text size={16} weight={500} color="#25292C">탈퇴 사유</Text>
        <Stack mt={15} gap={6}>
          {quitReasons.map(item => 
            <WithdrawRadioItem 
              key={item.id}
              reason={item}
              selectedId={selectedId}
              onClick={() => handleItemClick(item.id)}
            />
          )}
        </Stack>
      </Box>
      <FlexBox gap={8}>
        <Button
          flex={1}
          radius={5}
          height={35}
          backgroundColor="#EDF0F3"
          onClick={handleCancleClick}
        >
          <Text size={14} weight={600} color="#7B8287">취소</Text>
        </Button>
        <Button
          flex={1}
          radius={5}
          height={35}
          backgroundColor="rgba(232, 59, 59, 0.70)"
          onClick={handleQuitClick}
        >
          <Text size={14} weight={600} color="#FFFFFF">탈퇴</Text>
        </Button>
      </FlexBox>
    </Fragment>
  )
}