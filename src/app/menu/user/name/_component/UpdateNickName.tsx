"use client";

import cx from "classnames";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

import style from "./UpdateNickName.module.css";

import { userState } from "@/states/client/atoms/user";
import { useUpdateNickname } from "@/states/server/mutations";

import { useToast } from "@/components/Toast/useToast";

const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,12}$/;

export default function UpdateNickName() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSave, setActiveSave] = useState<boolean>(false);
  const [nickName, setNickName] = useState<string>("");
  const [_, setUserInfo] = useRecoilState(userState);
  const { showToast } = useToast();

  const nickNameMutation = useUpdateNickname({
    onSuccess: data => {
      if (data.status === "SUCCESS") {
        showToast({ content: "닉네임 변경 완료!", type: "success" });
        setUserInfo(prev => ({ ...prev, nickname: nickName }));
        setActiveSave(false);
        return;
      }

      if (data.status === "DUPLICATION") {
        showToast({ content: "중복된 닉네임 입니다!", type: "error" });
        return;
      }
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickName(newNickname);
    setActiveSave(nicknameRegex.test(newNickname));
  };

  const handleSumbit = () => {
    nickNameMutation.mutate({ nickname: nickName });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <input
          className={cx([style.input_field, activeSave && style.active])}
          placeholder="닉네임을 입력해주세요."
          type="text"
          maxLength={15}
          onChange={handleNicknameChange}
        />
        <button
          type="submit"
          className={style.save_btn}
          disabled={!activeSave}
          onClick={handleSumbit}
        >
          저장
        </button>
        <p>
          닉네임은 <span>2자 이상, 12자 이하</span>의<span> 한글, 영문, 숫자</span> 조합으로
          <br />
          사용하실 수 있습니다. (특수문자 제외)
        </p>
        <div className={style.info_box} onClick={() => setIsOpen(true)}>
          <Image src="/icons/info_icon.svg" alt="info icon" width={18} height={18} />
          <span>닉네임은 어디서 쓰이나요?</span>
        </div>
      </div>
      {isOpen && (
        <div className={style.nickname_info_box}>
          <p>
            <span>GPT 칼럼 - 의견 나누기</span>에서 노출되는 이름입니다.
          </p>
          <Image
            src="/icons/close_green.svg"
            alt="close icon"
            width={12}
            height={12}
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
