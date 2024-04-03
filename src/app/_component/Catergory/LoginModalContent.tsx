"use client";

import { useRouter } from 'next/navigation';
import style from './LoginModalContent.module.css'
import cx from 'classnames'

type LoginModalContentProps = {
  onClose: () => void
}
export default function LoginModalContent({onClose}: LoginModalContentProps) {
  const router = useRouter();

  const handleLoginBtnClick = () => {
    onClose();
    router.push('/login');
  }
  return (
    <div className={style.container}>
      <p className={style.title}>
        로그인이 필요한<br />서비스입니다.
      </p>
      <p className={style.info_text}>로그인 후 다양한 기능을 이용해보세요!</p>
      <div className={style.button_area}>
        <button className={cx([style.button_base, style.next_btn])} onClick={onClose}>다음에 할게요</button>
        <button className={cx([style.button_base, style.login_btn])} onClick={handleLoginBtnClick}>로그인 하기</button>
      </div>
    </div>
  )
}