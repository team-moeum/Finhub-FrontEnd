"use client";

import Image from "next/image";
import style from "./ProfileAvatar.module.css";
import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const data = {
  "defaultAvatar": "/icons/default_user_avatar.svg",
  "avatarList": [
    {
      "id": 1,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 2,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 3,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 4,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 5,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 6,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 7,
      "imgUrl": "/icons/default_user_avatar.svg"
    },
    {
      "id": 8,
      "imgUrl": "/icons/default_user_avatar.svg"
    }
  ]
}

type dataType = {
  defaultAvatar: string,
  avatarList: {
    id: number,
    imgUrl: string
  }[]
}

type ProfileContent = {
  data: dataType,
  onClose: (e?: React.MouseEvent) => void,
}

const ProfileContent = ({data, onClose}: ProfileContent) => {
  return (
    <div className={style.profile_box}>
      <div className={style.selected_avatar_box}>
        <Image 
            src={data.defaultAvatar}
            alt="user avatar icon"
            width={90}
            height={90}
            priority
          />
      </div>
      <div className={style.user_avatar_box}>
        {data.avatarList.map(item => {
          return (
            <Image
              key={item.id}
              className={style.user_avatar_item} 
              src={item.imgUrl}
              alt={`user avatar icon${item.id}`}
              width={60}
              height={60}
            />
          )
        })}
      </div>
      <div className={style.button_area}>
        <button className={style.close}>지우기</button>
        <button className={style.confirm} onClick={onClose}>확인</button>
      </div>
    </div>
  )
}


export default function ProfileAvatar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={style.avatar_box} onClick={() => setIsOpen(true)}>
        <Image 
          src='/icons/default_user_avatar.svg'
          alt="user avatar icon"
          width={90}
          height={90}
          priority
        />
        <Image 
          className={style.avatar_change_icon}
          src='/icons/avatar_change.svg'
          alt="user avatar change icon"
          width={34}
          height={34}
        />
      </div>   

      <AnimatePresence>
            {isOpen && 
              <BottomSheet
                title="프로필 아바타 선택"
                radius={20}
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
              >
                <ProfileContent data={data} onClose={() => setIsOpen(false)}/>
              </BottomSheet>
            }
        </AnimatePresence>
    </>
  )
}