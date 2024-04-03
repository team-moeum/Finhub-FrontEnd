"use client";

import { useState } from "react";
import style from "./UpdateNickName.module.css";
import Image from "next/image";
import cx from "classnames";

const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,12}$/;

export default function UpdateNickName() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSave, setActiveSave] = useState<boolean>(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setActiveSave(nicknameRegex.test(newNickname));
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
        <button type='submit' className={style.save_btn} disabled={!activeSave}>저장</button>
        <p>닉네임은 <span>2자 이상, 12자 이하</span>의<span> 한글, 영문, 숫자</span> 조합으로<br />사용하실 수 있습니다. (특수문자 제외)</p>
        <div className={style.info_box} onClick={() => setIsOpen(true)}>
          <Image 
            src='/icons/info_icon.svg'
            alt="info icon"
            width={18}
            height={18}
          />
          <span>닉네임은 어디서 쓰이나요?</span>
        </div>
      </div>
      {isOpen && 
        <div className={style.nickname_info_box}>
          <p><span>컬럼 - 의견 나누기</span>에서 노출되는 이름입니다.</p>
          <Image 
            src='/icons/close_green.svg'
            alt="close icon"
            width={12}
            height={12}
            onClick={() => setIsOpen(false)}
          />
        </div>
      }
    </div>
  )
}