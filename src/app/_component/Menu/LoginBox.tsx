'use client'

import style from "./LoginBox.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { LinkButton } from "../UiComponent/LinkButton";
import { userState } from "@/states/client/atoms/user";
import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import LoginModalContent from "../Catergory/LoginModalContent";
import { AnimatePresence } from "framer-motion";
import { PressButton } from "../UiComponent/PressAnimator";

import BellIcon from '@/public/icons/bell_gray_ico.svg';

export default function LoginBox({ isLogin }: { isLogin: boolean }) {
  const [userInfo, _] = useRecoilState(userState);
  const [activeLogin, setActiveLogin] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>메뉴</span>
        {isLogin &&
          <div className={style.icon_box}>
            <BellIcon />
          </div>
        }
      </div>
      <div className={style.login_box}>
        {isLogin ?
          <LinkButton href={'/menu/user'}>
            <div className={style.login_card}>
              <div className={style.avatar_box}>
                <Image
                  src={userInfo.avatarUrl || '/images/default_avatar_img.png'}
                  alt='user avatar icon'
                  width={60}
                  height={60}
                />
              </div>
              <div className={style.text_box}>
                <span>{userInfo.nickname}</span>
                <span>{userInfo.userType || "직업 없음"}</span>
              </div>
              <div className={style.icon_box}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.6754 2.31731C11.249 0.560897 8.75103 0.560897 8.32463 2.31731C8.04918 3.45193 6.74926 3.99037 5.75219 3.38285C4.2087 2.44239 2.44239 4.2087 3.38285 5.75218C3.99037 6.74925 3.45193 8.04918 2.31731 8.32463C0.560897 8.75103 0.560897 11.249 2.31731 11.6754C3.45193 11.9508 3.99038 13.2507 3.38285 14.2478C2.44239 15.7913 4.2087 17.5576 5.75219 16.6172C6.74926 16.0096 8.04918 16.5481 8.32463 17.6827C8.75103 19.4391 11.249 19.4391 11.6754 17.6827C11.9508 16.5481 13.2507 16.0096 14.2478 16.6172C15.7913 17.5576 17.5576 15.7913 16.6172 14.2478C16.0096 13.2507 16.5481 11.9508 17.6827 11.6754C19.4391 11.249 19.4391 8.75103 17.6827 8.32463C16.5481 8.04918 16.0096 6.74925 16.6172 5.75218C17.5576 4.2087 15.7913 2.44239 14.2478 3.38285C13.2507 3.99038 11.9508 3.45193 11.6754 2.31731ZM10 13.375C11.864 13.375 13.375 11.864 13.375 10C13.375 8.13604 11.864 6.625 10 6.625C8.13604 6.625 6.625 8.13604 6.625 10C6.625 11.864 8.13604 13.375 10 13.375Z" stroke="#CDD1D5" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </LinkButton>
          :
          <PressButton>
            <div onClick={() => setActiveLogin(true)}>
              <div className={style.login_card}>
                <div className={style.avatar_box}>
                  <Image
                    src={'/images/default_avatar_img.png'}
                    alt='user avatar icon'
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div className={style.text_box}>
                  <span>로그인이 필요해요</span>
                  <span>원활한 서비스 이용을 위해 로그인 해주세요.</span>
                </div>
              </div>
            </div>
          </PressButton>
        }
        {isLogin &&
          <LinkButton href={'/menu/scrap'}>
            <div className={style.scrap_card}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M10.465 1.06748C10.9481 -0.355829 13.0519 -0.355828 13.535 1.06749L15.2614 6.15291C15.4774 6.78944 16.0971 7.2204 16.7964 7.2204H22.3829C23.9464 7.2204 24.5965 9.13545 23.3316 10.0151L18.812 13.1581C18.2463 13.5515 18.0096 14.2488 18.2257 14.8853L19.952 19.9707C20.4352 21.394 18.7332 22.5776 17.4683 21.6979L12.9487 18.555C12.383 18.1616 11.617 18.1616 11.0513 18.555L6.53173 21.6979C5.26679 22.5776 3.56483 21.394 4.04799 19.9707L5.77431 14.8853C5.99039 14.2488 5.75368 13.5515 5.18798 13.1581L0.668421 10.0151C-0.596517 9.13545 0.0535755 7.2204 1.61713 7.2204H7.20361C7.90285 7.2204 8.52257 6.78944 8.73865 6.15291L10.465 1.06748Z" fill="url(#paint0_linear_563_11809)" /><defs><linearGradient id="paint0_linear_563_11809" x1="9.5" y1="8" x2="21.5" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#FEE47B" /><stop offset="1" stopColor="#F9C200" /></linearGradient></defs></svg>
              <p>나의 <span>스크랩</span></p>
              <button>보러가기</button>
            </div>
          </LinkButton>
        }
      </div>

      <AnimatePresence>
        {activeLogin &&
          <BottomSheet
            isOpen={true}
            onClose={() => setActiveLogin(false)}
          >
            <LoginModalContent onClose={() => setActiveLogin(false)} />
          </BottomSheet>
        }
      </AnimatePresence>

    </div>
  )
}