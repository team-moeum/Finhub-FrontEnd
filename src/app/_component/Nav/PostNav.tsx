"use client";

import style from "./Nav.module.css";
import cx from "classnames";
import Image from "next/image";

import BackButton from "./BackButton";
import { useEffect } from "react";

type Props = {
  scrap: boolean;
  topicId: number;
  onClick: () => void;
  onShare: () => void;
};
export default function PostNav({ scrap, topicId, onClick, onShare }: Props) {
  const scrapIconPath = scrap
    ? "/icons/scrap_icon_on.svg"
    : "/icons/scrap_icon_type2.svg";

  return (
    <div className={cx([style.container, style.post])}>
      <BackButton />
      <div className={style.right_box}>
        <Image
          src="/icons/export_icon.svg"
          alt="export icon"
          width={18}
          height={18}
          onClick={onShare}
        />
        <Image
          src={scrapIconPath}
          alt="scrap icon"
          width={20}
          height={18}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
