import style from "./user.module.css";

import MenuCard from "@/app/_component/Menu/MenuCard";
import MenuHeader from "../../_component/Menu/MenuHeader";
import ProfileAvatar from "./_component/ProfileAvatar";

/** 서버 사이드에서 유저 정보 가져오기 */
const loginInfoEmail = "test@naver.com"

export default function UserPage() {
  return (
    <div className={style.container}>
      <MenuHeader>프로필</MenuHeader>
      <div className={style.avatar_box}>
        <ProfileAvatar />
      </div>
      <div className={style.content}>
        <MenuCard href="/menu/user/name">닉네임 변경</MenuCard>
        <MenuCard href="/menu/user/usertype">직업 설정</MenuCard>
      </div>
      <div className={style.login_info_box}>
        <p>로그인 정보</p>
        <p>카카오톡 닉네임 {loginInfoEmail}</p>
      </div>
      <button className={style.leave_button}>탈퇴하기</button>
    </div>
  )
}