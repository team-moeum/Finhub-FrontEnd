"use client";

import Image from "next/image";
import { Suspense, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Loading from "@/app/loading";

import style from "./UserTypeContent.module.css";
import UserTypeItemList from "./UserTypeItemList";

import { topicUserType } from "@/states/client/atoms/topicUsertype";
import { userState } from "@/states/client/atoms/user";
import { useTopicGptInfo, useUserTypeList } from "@/states/server/queries";

import { UserType } from "@/model/UserType";

type UserTypeGptConentProps = {
  categoryId: number;
  topicId: number;
  activeType: UserType;
  userTypeList: UserType[];
};

const UserTypeGptConent = ({
  categoryId,
  topicId,
  activeType,
  userTypeList
}: UserTypeGptConentProps) => {
  const userInfo = useRecoilValue(userState);
  const setActiveType = useSetRecoilState(topicUserType);

  const { data: topicGptInfo } = useTopicGptInfo(categoryId, topicId, activeType.id);

  useEffect(() => {
    setActiveType(userTypeList.find(item => userInfo.userType === item.name) || userTypeList[0]);
  }, [userInfo]);

  const hasFinalConsonant = (name: string) => {
    const charCode = name.charCodeAt(name.length - 1) - 0xac00;
    const finalConsonant = charCode % 28;
    return finalConsonant !== 0;
  };

  const particle = hasFinalConsonant(activeType.name)
    ? "을 위한 설명은 준비 중이에요!"
    : "를 위한 설명은 준비 중이에요!";

  return (
    <div className={style.content_text}>
      {topicGptInfo.content || (
        <div className={style.not_found_content}>
          <Image src="/icons/loading_icon.svg" alt="loading icon" width={24} height={24} />
          <div className={style.text_box}>
            <p>
              <span>{activeType.name}</span>
              {particle}
            </p>
            <p>조금만 기다려주세요!</p>
          </div>
        </div>
      )}
    </div>
  );
};

type Props = {
  categoryId: number;
  topicId: number;
};

const hasFinalConsonant = (name: string) => {
  const charCode = name.charCodeAt(name.length - 1) - 0xac00;
  const finalConsonant = charCode % 28;
  return finalConsonant !== 0;
};

const getParticle = (name: string) => {
  return hasFinalConsonant(name) ? "을 위한 설명" : "를 위한 설명";
};

export default function UserTypeContent({ categoryId, topicId }: Props) {
  const activeType = useRecoilValue(topicUserType);

  const { data: userTypeList } = useUserTypeList();

  return (
    <div className={style.container}>
      <UserTypeItemList data={userTypeList} />
      <div className={style.notify_box}>
        <p className={style.active_name}>{activeType.name}</p>
        {getParticle(activeType.name)}
      </div>
      <Suspense fallback={<Loading height={200} />}>
        <UserTypeGptConent
          categoryId={categoryId}
          topicId={topicId}
          activeType={activeType}
          userTypeList={userTypeList}
        />
      </Suspense>
    </div>
  );
}
