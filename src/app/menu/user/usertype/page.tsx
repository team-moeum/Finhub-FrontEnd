"use client";

import style from "./userType.module.css";
import Image from "next/image";
import MenuHeader from "@/app/_component/Menu/MenuHeader";
import SelectUserType from "./_component/SelectUserType";
import { useRecoilState } from "recoil";
import { useSsrComplectedState, userState } from "@/states/client/atoms/user";
import { useEffect, useState } from "react";

export default function UserTypePage() {
  const [imgPath, serImgPath] = useState('/images/userType_default_img.png');
  const [userInfo, _] = useRecoilState(userState);

  useEffect(() => {
    if (userInfo.userTypeUrl) serImgPath(userInfo.userTypeUrl);
  }, [userInfo, serImgPath])

  return (
    <div className={style.container}>
      <MenuHeader>직업 설정</MenuHeader>
      <div className={style.avatar_box}>
        <Image 
          src={imgPath}
          alt='UserType Image'
          width={120}
          height={120}
          priority
        />
      </div>
      <SelectUserType userInfo={userInfo}/>
    </div>
  )
}