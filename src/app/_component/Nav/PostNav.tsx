"use client";

import style from "./Nav.module.css";
import cx from "classnames";
import Image from "next/image";

import BackButton from "./BackButton";
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { SafeArea } from "../SafeArea";

type Props = {
  scrap: boolean;
  onClick: () => void;
  onShare: () => void;
};

export default function PostNav({ scrap, onClick, onShare }: Props) {
  const scrollPosition = useScrollPosition();

  const scrapIconPath = scrap
    ? "/icons/scrap_icon_on.svg"
    : "/icons/scrap_icon_type2.svg";

  const opacity = scrollPosition < 200 ? 0 : 1
  const backgroundColor = `rgba(255, 255, 255, ${opacity})`;

  return (
    <div 
      className={cx([style.container, style.post])}
      style={{
        backgroundColor,
        transition: 'background-color 0.3s ease'
      }}
    >
      <FlexBox direction="column" width='100%'>
        <SafeArea />
        <FlexRow width='100%' py={12} px={16}>
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
        </FlexRow>
      </FlexBox>
    </div>
  );
}
