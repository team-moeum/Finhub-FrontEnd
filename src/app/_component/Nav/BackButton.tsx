"use client";

import {useRouter} from "next/navigation";
import style from "./Nav.module.css";
import Image from "next/image";

type iconType = "type1" | "type2"
export default function BackButton({icon="type1", onClick} : {icon?: iconType, onClick?: () => void}) {
  const router = useRouter();
  const onClickClose = () => {
    if (onClick) return onClick();
    router.back();
  }

  return (
    <button className={style.close_button} onClick={onClickClose}>
      {icon === "type1" ? 
        <Image 
          src='/icons/back_icon_type1.svg'
          alt="back arrow"
          width={8}
          height={12}
        />
        :
        <Image
          src='/icons/back_icon_type2.svg'
          alt="back arrow"
          width={15}
          height={12}
        />
      }
    </button>
  )
}