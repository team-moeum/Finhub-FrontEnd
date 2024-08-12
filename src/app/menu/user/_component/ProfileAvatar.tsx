"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

import style from "./ProfileAvatar.module.css";

import { userState } from "@/states/client/atoms/user";
import { useDeleteUserAvatar, useUpdateUserAvatar } from "@/states/server/mutations";
import { useUserAvatarList } from "@/states/server/queries";

import { User } from "@/model/User";
import { UserAvatar } from "@/model/UserAvatar";

import { BottomSheet } from "@/components/BottomSheet/BottomSheet";

type ProfileContent = {
  userInfo: User;
  data: UserAvatar[];
  onClose: (e?: React.MouseEvent) => void;
  onImgClick: (avatar: UserAvatar) => void;
  onDeleteClick: () => void;
};

const ProfileContent = ({ userInfo, data, onClose, onImgClick, onDeleteClick }: ProfileContent) => {
  return (
    <div className={style.profile_box}>
      <div className={style.selected_avatar_box}>
        <Image
          src={userInfo.avatarUrl || "/icons/default_user_avatar.svg"}
          alt="user avatar icon"
          width={90}
          height={90}
          priority
        />
      </div>
      <div className={style.user_avatar_box}>
        {data.map(item => {
          return (
            <div className={style.img_item_box} key={item.id}>
              <Image
                onClick={() => onImgClick(item)}
                src={item.imgUrl}
                alt={`user avatar icon${item.id}`}
                width={60}
                height={60}
                priority
              />
            </div>
          );
        })}
      </div>
      <div className={style.button_area}>
        <button className={style.close} onClick={onDeleteClick}>
          지우기
        </button>
        <button className={style.confirm} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default function ProfileAvatar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, serUserInfo] = useRecoilState(userState);
  const [selectedAvatar, setSelectedAvatar] = useState<UserAvatar>();
  const { data: userAvatarList } = useUserAvatarList();
  const userAvartarMutation = useUpdateUserAvatar({
    onSuccess: () => {
      serUserInfo(prev => ({ ...prev, avatarUrl: selectedAvatar?.imgUrl }));
    }
  });
  const deleteUserAvatarMutation = useDeleteUserAvatar({
    onSuccess: () => {
      serUserInfo(prev => ({ ...prev, avatarUrl: "" }));
    }
  });

  const handleImgClick = (avatar: UserAvatar) => {
    setSelectedAvatar(avatar);
    userAvartarMutation.mutate({ id: avatar.id });
  };

  const handleDeleteClick = () => {
    if (userInfo.avatarUrl) deleteUserAvatarMutation.mutate();
  };

  return (
    <>
      <div className={style.avatar_box} onClick={() => setIsOpen(true)}>
        <Image
          src={userInfo.avatarUrl ? userInfo.avatarUrl : "/icons/default_user_avatar.svg"}
          alt="user avatar icon"
          width={90}
          height={90}
          priority
        />
        <Image
          className={style.avatar_change_icon}
          src="/icons/avatar_change.svg"
          alt="user avatar change icon"
          width={34}
          height={34}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <BottomSheet
            title="프로필 아바타 선택"
            radius={20}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <ProfileContent
              userInfo={userInfo}
              data={userAvatarList}
              onClose={() => setIsOpen(false)}
              onImgClick={handleImgClick}
              onDeleteClick={handleDeleteClick}
            />
          </BottomSheet>
        )}
      </AnimatePresence>
    </>
  );
}
