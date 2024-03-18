import style from "./user.module.css";
import MenuHeader from "../../_component/Menu/MenuHeader";
import Link from "next/link";
import PushItem from "./_component/PushItem";

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
            <MenuHeader>설정</MenuHeader>
            <div className={style.content}>
              <ul>
                <li className={style.title}>알림</li>
                <li className={style.push_box}>
                  <PushItem />
                </li>
              </ul>
              <div className={style.divider}></div>
              <ul>
                <li className={style.title}>내정보</li>
                <li>
                  <LinkItem href="/menu/user/name">닉네임 변경</LinkItem>
                </li>
                <li>
                  <LinkItem href="/menu/user/usertype">직업 설정</LinkItem>
                </li>
              </ul>
            </div>
        </div>
    )
}