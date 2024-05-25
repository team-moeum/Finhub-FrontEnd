import { PressBox } from "../UiComponent/PressAnimator";
import style from "./MenuCard.module.css";
import Link from "next/link";

import ArrowRightIcon from '@/public/icons/icon_arrow_right.svg';

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function MenuCard({ href, children }: Props) {
  return (
    <PressBox>
      <Link href={href}>
        <div className={style.container}>
          <span>{children}</span>
          <ArrowRightIcon />
        </div>
      </Link>
    </PressBox>
  )
}