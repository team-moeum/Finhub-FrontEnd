import style from "./Nav.module.css";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { isUserLoginSsr } from "@/utils/auth_server";

type MainNavColor = 'white' | 'green';

export default function MainNav({color='green'}: {color?: MainNavColor}) {
  const isLogin = isUserLoginSsr();

  return (
    <div className={cx([
      style.container, 
      color==='green' && style.green,
      color==='white' && style.white,
    ])}>
      <Link href="/home">
        <Image
          src={color === 'green' ? "/finhub_logo_white.svg" : "/finhub_logo_green.svg"}
          alt="FinhubLogo"
          width={102}
          height={25}
        />
      </Link>
      <div className={style.right_box}>
        <Link href={isLogin ? `/notify` : `/login`}>
          <Image
            priority
            src={color === 'green' ? "/icons/notify.svg" : "/icons/notify_green.svg"}
            alt="notify icon"
            width={21}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
