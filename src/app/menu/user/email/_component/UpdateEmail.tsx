"use client";

import cx from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { EmailSuggestionList } from "./EmailSuggestionList";
import style from "./UpdateEmail.module.css";

import { userState } from "@/states/client/atoms/user";
import { useUpdateEmail } from "@/states/server/mutations";

import { useToast } from "@/components/Toast/useToast";

const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const DELAY_TIME = 200;

export default function UpdateEmail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSave, setActiveSave] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [email, setEmail] = useState<string>(userInfo.email);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false);
  const { showToast } = useToast();

  const emailMutation = useUpdateEmail({
    onSuccess: () => {
      showToast({ content: "이메일 변경 완료!", type: "success" });
      setUserInfo({ ...userInfo, email });
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setActiveSave(emailRegex.test(newEmail));
    setIsSuggestionOpen(!newEmail.includes("@"));
  };

  const handleSumbit = () => {
    emailMutation.mutate({ email });
  };

  const handleSelect = (value: string) => {
    setEmail(value);
    setActiveSave(emailRegex.test(value));
  };

  const handleBlur = () => {
    setTimeout(() => setIsSuggestionOpen(false), DELAY_TIME);
  };

  const handleFocus = () => {
    setTimeout(() => setIsSuggestionOpen(!email.includes("@")), DELAY_TIME);
  };

  useEffect(() => {
    setEmail(userInfo.email);
  }, [userInfo.email]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <input
          className={cx([style.input_field, activeSave && style.active])}
          placeholder="이메일을 입력해주세요."
          type="text"
          value={email}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className={style.save_btn}
          disabled={!activeSave}
          onClick={handleSumbit}
        >
          저장
        </button>
        <div className={style.info_box} onClick={() => setIsOpen(true)}>
          <Image src="/icons/info_icon.svg" alt="info icon" width={18} height={18} />
          <span>이메일은 어디서 쓰이나요?</span>
        </div>
        {isSuggestionOpen && email && (
          <div className={style.suggestion_container}>
            <EmailSuggestionList id={email.split("@")[0]} onSelect={handleSelect} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className={style.email_info_box}>
          <p>
            <span>문의하기 - 설정하신 이메일로 답변을 보내드립니다.</span>
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
