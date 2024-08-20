"use client";

import style from "./DetailButton.module.css";

import { LinkButton } from "@/components/LinkButton";

export default function DetailButton() {
  return (
    <>
      {/* 버튼 만들 때, LinkButton에 바로 스타일 주지 않고 아래에 div 빼서 따로 준 것은 재사용성 때문만인지 */}
      <LinkButton href={"/feed/column/list"}>
        <div className={style.detail_button}>더보기</div>
      </LinkButton>
    </>
  );
}
