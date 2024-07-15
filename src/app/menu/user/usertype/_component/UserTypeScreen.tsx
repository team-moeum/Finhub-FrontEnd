"use client";

import style from "./userType.module.css";
import Image from "next/image";
import SelectUserType from "./SelectUserType";
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { useEffect, useState } from "react";
import { AppContainer, Container } from "@/components/Container";
import { AppBar } from "@/components/AppBar";

export const UserTypeScreen = () => {
  const [imgPath, serImgPath] = useState('/images/userType_default_img.png');
  const [userInfo, _] = useRecoilState(userState);

  useEffect(() => {
    if (userInfo.userTypeUrl) serImgPath(userInfo.userTypeUrl);
  }, [userInfo, serImgPath])

  return (
    <AppContainer>
      <AppBar 
        useLeftBack
        title="직업 설정"
      />
      <Container>
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
      </Container>
    </AppContainer>
  )
}