"use client";

import style from "./UserTypeContent.module.css";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Loading from "@/app/loading";
import { UserType } from "@/model/UserType";
import { userState } from "@/states/client/atoms/user";
import { topicUserType } from "@/states/client/atoms/topicUsertype"
import UserTypeItemList from "./UserTypeItemList";
import { useTopicGptInfo, useUserTypeList } from "@/states/server/queries";

type UserTypeGptConentProps = {
  categoryId: number,
  topicId: number,
  activeType: UserType,
  userTypeList: UserType[]
}
const UserTypeGptConent = ({ categoryId, topicId, activeType, userTypeList }: UserTypeGptConentProps) => {
  const userInfo = useRecoilValue(userState);
  const setActiveType = useSetRecoilState(topicUserType);

  const { data: topicGptInfo } = useTopicGptInfo(categoryId, topicId, activeType.id);

  useEffect(() => {
    setActiveType(userTypeList.find((item) => userInfo.userType === item.name) || userTypeList[0])
  }, [userInfo])

  return (
    <div className={style.content_text}>
      {topicGptInfo.content ||
        <div className={style.not_found_content}>
          <Image
            src='/icons/loading_icon.svg'
            alt="loading icon"
            width={24}
            height={24}
          />
          <div className={style.text_box}>
            <p><span>{activeType.name}</span>을 위한 설명은 준비 중이에요!</p>
            <p>조금만 기다려주세요!</p>
          </div>
        </div>
      }
    </div>
  )
}

type Props = {
  categoryId: number,
  topicId: number,
}
export default function UserTypeContent({ categoryId, topicId }: Props) {
  const activeType = useRecoilValue(topicUserType);

  const { data: userTypeList } = useUserTypeList();

  return (
    <div className={style.container}>
      <UserTypeItemList data={userTypeList} />
      <div className={style.notify_box}>
        <p className={style.active_name}>{activeType.name}</p>을 위한 설명
      </div>
      <Suspense fallback={<Loading height={200}/>}>
        <UserTypeGptConent 
          categoryId={categoryId}
          topicId={topicId}
          activeType={activeType}
          userTypeList={userTypeList}
        />
      </Suspense>
    </div>
  )
}