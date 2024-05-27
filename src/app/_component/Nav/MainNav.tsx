import style from "./Nav.module.css";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { isUserLoginSsr } from "@/utils/auth_server";

export default async function MainNav() {
  const isLogin = isUserLoginSsr();

  return (
    <div className={cx([style.container, style.main])}>
      <Link href="/home">
        <Image
          src="/finhub_logo_white.svg"
          alt="FinhubLogo"
          width={102}
          height={25}
        />
      </Link>
      <div className={style.right_box}>
        <Link href={isLogin ? `/notify` : `/login`}>
          <Image
            priority
            src="/icons/notify.svg"
            alt="notify icon"
            width={21}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
