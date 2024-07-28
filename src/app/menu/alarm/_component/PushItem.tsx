"use client";

import { useEffect, useState } from "react"
import style from './pushItem.module.css';
import cx from 'classnames';
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { usePushAlarmYn } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";
import { jsToNative } from "@/utils/jsToNative";
import { Popup } from "@/components/Popup";
import { useModal } from "@/hooks/useModal";
import { FlexBox } from "@/components/FlexBox";
import { Text } from "@/components/Text";

type ToggleButtonProps = {
  checked: boolean,
  onChange: () => void
}
const ToggleButton = ({ checked, onChange }: ToggleButtonProps) => {
  return (
    <div className={cx([style.toggle_box, checked && style.active])} onClick={onChange}>
      <div className={cx([style.toggle_circle, checked && style.active])}></div>
    </div>
  )
}

export default function PushItem() {
  const [checked, setChecked] = useState(false);
  
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const { showToast } = useToast();
  const AlarmAgreeModal = useModal();

  const pushAlarmYnMutation = usePushAlarmYn({
    onSettled: () => {
      setChecked(!checked);
    },
    onSuccess: (data) => {
      if (data.status === "SUCCESS") {
        setUserInfo(prev => ({...prev, pushYN: !prev.pushYN}));
        showToast({content: "푸시 알림 설정이 변경되었어요!", type: "success"});
      } else {
        setChecked(!checked);
        showToast({content: "잠시후 다시 시도해주세요!", type: "warning"});  
      }
    },
    onError: () => {
      setChecked(!checked);
      showToast({content: "잠시후 다시 시도해주세요!", type: "warning"});
    }
  })

  useEffect(() => {
    setChecked(userInfo.pushYN === true)
  }, [userInfo])

  const handleAlarmAgreeClick = () => {
    jsToNative({ val1: "requestNotificationPermission" }, (data: any) => {});
    AlarmAgreeModal.close();
  }

  const toggleHandler = () => {
    /** 알림 비활성화 */
    if (checked) return pushAlarmYnMutation.mutate({yn: false});

    /** 알림 활성화 */
    jsToNative({ val1: "getNotificationPermission" }, (data: any) => {
      const systemAlarmYn = JSON.parse(data.detail).result;

      if (!systemAlarmYn) {
        return AlarmAgreeModal.open();
      }

      pushAlarmYnMutation.mutate({yn: true});
    });
  };

  return (
    <>
      <div className={style.container}>
        <span>푸시 알림</span>
        <ToggleButton checked={checked} onChange={toggleHandler} />
      </div>

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
    </>
  )
}