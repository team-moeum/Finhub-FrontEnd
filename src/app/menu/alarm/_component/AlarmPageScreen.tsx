"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { DisagreePopup } from "./DisagreePopup";
import PushItem from "./PushItem";
import PushMarketingOptIn from "./PushMarketingOptIn";

import { userState } from "@/states/client/atoms/user";
import { usePushAlarmYn } from "@/states/server/mutations";

import { datetimeFormatter } from "@/utils/formatter";
import { jsToNative } from "@/utils/jsToNative";

import { useModal } from "@/hooks/useModal";

import { Container } from "@/components/Container";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { BasicToast } from "@/components/Toast/BasicToast";
import { useToast } from "@/components/Toast/useToast";

const PUSH_MARKETING_OPTIN = "/menu/alarm/pushMarketingOptIn";

export const AlarmPageScreen = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userState);
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
    AlarmDisAgreeModal.close();
  };

  const toggleHandler = () => {
    /** 알림 비활성화 */
    if (checked) return AlarmDisAgreeModal.open();
    /** 알림 활성화 */
    agree();
  };

  useEffect(() => {
    setChecked(userInfo.pushYN === true);
  }, [userInfo]);

  return (
    <Container>
      <Stack mt={28} gap={10}>
        <Text size={16} weight={600} color="#191B1C">
          알림
        </Text>
        <PushItem checked={checked} onToggle={toggleHandler} />
        <PushMarketingOptIn />
      </Stack>
      <DisagreePopup
        show={AlarmDisAgreeModal.show}
        onClose={AlarmDisAgreeModal.close}
        onDisagree={disagree}
      />
    </Container>
  );
};
