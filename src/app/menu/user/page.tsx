import style from "./user.module.css";
import Link from "next/link";
import MenuHeader from "../../_component/Menu/MenuHeader";
import ProfileAvatar from "./_component/ProfileAvatar";

/** 서버 사이드에서 유저 정보 가져오기 */
const loginInfoEmail = "test@naver.com"


type Props = {
  href: string;
  children: React.ReactNode;
}

const LinkItem = ({href, children} : Props) => {
  return (
    <Link href={href} className="link_btn" style={{width:'100%'}}>
      <div className={style.link_item}>
        <span>{children}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 13L7 7L1 1" stroke="#DADBDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>  
  )
}

export default function UserPage() {
    return (
        <div className={style.container}>
            <MenuHeader>프로필</MenuHeader>
            <div className={style.avatar_box}>
              <ProfileAvatar />
            </div>
            <div className={style.content}>
              <LinkItem href="/menu/user/name">닉네임 변경</LinkItem>
              <LinkItem href="/menu/user/usertype">직업 설정</LinkItem>
            </div>
            <div className={style.login_info_box}>
              <p>로그인 정보</p>
              <p>카카오톡 닉네임 {loginInfoEmail}</p>
            </div>
            <button className={style.leave_button}>탈퇴하기</button>
        </div>
    )
}