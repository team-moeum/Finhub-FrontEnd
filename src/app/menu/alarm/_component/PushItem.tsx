"use client";

import { useEffect, useState } from "react"
import style from './pushItem.module.css';
import cx from 'classnames';
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { usePushAlarmYn } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";

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

  const toggleHandler = () => {
    pushAlarmYnMutation.mutate({yn: !checked});
  };

  return (
    <div className={style.container}>
      <span>푸시 알림</span>
      <ToggleButton checked={checked} onChange={toggleHandler} />
    </div>
  )
}