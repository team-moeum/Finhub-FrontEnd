"use client";

import style from "./Nav.module.css";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { isLoggedIn } from "@/utils/auth_client";
import { userSafeAreaTop } from "@/hooks/useSafeAreaTop";
import { FlexBox } from "@/components/FlexBox";
import { Box } from "@/components/Box";
import { FlexRow } from "@/components/FlexRow";

type MainNavColor = 'white' | 'green' | 'gray';
const COLOR_MAP: Record<MainNavColor, string> = {
  white: '#FFF',
  green: '#50BF50',
  gray: '#F6F7F9'
}

export default function MainNav({ color = 'green', noCotent = false }: { color?: MainNavColor, noCotent?: boolean }) {
  const isLogin = isLoggedIn();
  const top = userSafeAreaTop();

  return (
    <div className={cx([
      style.container,
      color === 'green' && style.green,
      color === 'white' && style.white,
    ])}>
      <FlexBox width='100%' direction='column'>
        <Box width='100%' height={top} backgroundColor={COLOR_MAP[color]} />
        {!noCotent &&
          <FlexRow width='100%' height={54} py={12} px={16}>
            <Link href="/home">
              <Image
                priority
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
          </FlexRow>
        }
      </FlexBox>
    </div>
  )
}
