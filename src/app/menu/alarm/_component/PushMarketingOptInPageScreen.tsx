"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

import { PushMarketingTableRow } from "../_component/PushMarketingTableRow";
import { DisagreePopup } from "./DisagreePopup";

import { userState } from "@/states/client/atoms/user";
import { usePushAlarmYn } from "@/states/server/mutations";

import { datetimeFormatter } from "@/utils/formatter";
import { jsToNative } from "@/utils/jsToNative";

import { useModal } from "@/hooks/useModal";
import { useScrollBottom } from "@/hooks/useScroll";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Popup } from "@/components/Popup";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { BasicToast } from "@/components/Toast/BasicToast";
import { useToast } from "@/components/Toast/useToast";

const BOTTOM_BUTTON = 100;

export const PushMarketingOptInPageScreen = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const { isBottom, scrollToBottom } = useScrollBottom();
  const { showToast } = useToast();
  const AlarmAgreeModal = useModal();
  const AlarmDisAgreeModal = useModal();

  const pushAlarmYnMutation = usePushAlarmYn({
    onSuccess: data => {
      if (data.status === "SUCCESS") {
        const pushYN = userInfo.pushYN;
        showToast({
          content: (
            <BasicToast
              label={`${datetimeFormatter()} 마케팅 정보 수신 ${pushYN ? "동의" : "철회"}를 했어요`}
            />
          ),
          duration: 3000
        });
        router.back();
      } else {
        setUserInfo(prev => ({ ...prev, pushYN: !prev.pushYN }));
        showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
      }
    },
    onError: () => {
      setUserInfo(prev => ({ ...prev, pushYN: !prev.pushYN }));
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const agree = () => {
    setUserInfo(prev => ({ ...prev, pushYN: true }));
    jsToNative({ val1: "getNotificationPermission" }, (data: any) => {
      const systemAlarmYn = JSON.parse(data.detail).result;
      if (!systemAlarmYn) {
        return AlarmAgreeModal.open();
      }
      pushAlarmYnMutation.mutate({ yn: true });
    });
  };

  const disagree = () => {
    setUserInfo(prev => ({ ...prev, pushYN: false }));
    pushAlarmYnMutation.mutate({ yn: false });
  };

  const handleSubmit = () => {
    if (userInfo.pushYN) {
      AlarmDisAgreeModal.open();
      return;
    } else if (!userInfo.pushYN && isBottom) {
      agree();
      return;
    }

    scrollToBottom();
  };

  const handleAlarmAgreeClick = () => {
    jsToNative({ val1: "requestNotificationPermission" }, (data: any) => {});
    AlarmAgreeModal.close();
  };

  return (
    <>
      <Container>
        <Stack mt={28} gap={10} pb={BOTTOM_BUTTON}>
          <Text size={16} weight={600} color="#191B1C">
            광고 ∙ 마케팅 수신 동의
          </Text>
          <Box mt={5}>
            <Text size={12} weight={500} color="#494F54" lineHeight="16px">
              핀허브 서비스를 이용해주셔서 감사합니다 .
              <br />
              <br />
              핀허브 회원분들에게 더욱 도움이 되는 서비스를 만들기 위해 , 관련 법령 (개인정보 보호법
              제22조 제4항 , 제39조의 3, 정보통신망법 제50조 등)에 따라 광고성 정보 수신과 이에 따른
              개인정보 처리에 대한 동의를 받고 있습니다.
              <br />
              <br />
              광고성 정보 매체 : 앱 푸쉬
            </Text>
          </Box>
          <Box mt={30}>
            <PushMarketingTableRow
              label="처리 목적"
              desc="핀허브 서비스에 대한 광고 , 홍보 , 프로모션 제공"
            />
            <PushMarketingTableRow
              label="처리 항목"
              desc="이메일주소, 단말식별번호 ( 단말기 아이디 ), PUSH 토큰"
            />
            <PushMarketingTableRow
              label={`이용 및\n보유기간`}
              desc="동의 철회 시 또는 회원 탈퇴 시까지"
            />
          </Box>
          <Box mt={20}>
            <Text size={12} weight={500} color="#494F54" lineHeight="16px">
              [ 동의 거부에 대한 안내 ]
              <br />
              {`광고, 마케팅 수신 동의는 선택 사항이며, 동의를 거부할 수 있습니다. 동의를 거부하여도
          다른 핀허브 서비스 이용에는 영향이 없습니다. 또한 광고, 마케팅 수신 동의는 메뉴 > 
          알림 > 마케팅 정보 수신 동의에서 취소 할 수 있습니다 .`}
              <br />
              <br />
              [ 동의 유지 안내 ]
              <br />
              동의를 유지하시면 2년마다 광고, 마케팅 수신 동의 상태를 알려드리고 있습니다 .
            </Text>
          </Box>
        </Stack>
      </Container>

      <Container
        width="100vw"
        display="flex"
        position="fixed"
        bottom={0}
        padding="25px 11px"
        backgroundColor="#ffffff"
      >
        <Button
          flex={1}
          height={50}
          backgroundColor="#50BF50"
          animate
          radius={10}
          onClick={handleSubmit}
        >
          <Text size={16} weight={600} color="#FFF">
            {userInfo.pushYN && "동의 철회하기"}
            {!userInfo.pushYN && isBottom && "동의하고 알람받기"}
            {!userInfo.pushYN && !isBottom && "아래로 스크롤하기"}
          </Text>
        </Button>
        <Popup
          show={AlarmAgreeModal.show}
          onClose={AlarmAgreeModal.close}
          leftButtonText="취소"
          rightButtonText="확인"
          onLeftClick={AlarmAgreeModal.close}
          onRightClick={handleAlarmAgreeClick}
        >
          <FlexBox direction="column" gap={6}>
            <Text size={16}>알림을 허용하시겠습니까?</Text>
            <Text size={14}>(OS와 버전에 따라 설정 페이지로 이동할 수 있습니다)</Text>
          </FlexBox>
        </Popup>
        <DisagreePopup
          show={AlarmDisAgreeModal.show}
          onClose={AlarmDisAgreeModal.close}
          onDisagree={disagree}
        />
      </Container>
    </>
  );
};
