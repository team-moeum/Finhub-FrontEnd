"use client";

import Link from "next/link";
import React from "react";
import ButtonBox from "@/components/Button/ButtonBox";
import LinkButtonBox from "@/components/Button/LinkButtonBox";
import * as S from "./page.style";

export default function Home() {
  return (
    <S.container>
      <S.MainWrap>
        <LinkButtonBox href={`/stock`} background="#eee" ripple animate>
          <S.MainItem>주식</S.MainItem>
        </LinkButtonBox>

        <LinkButtonBox href={`/fund`} background="#eee" ripple animate>
          <S.MainItem>펀드</S.MainItem>
        </LinkButtonBox>

        <LinkButtonBox href={`/etf`} background="#eee" ripple animate>
          <S.MainItem>ETF</S.MainItem>
        </LinkButtonBox>

        <LinkButtonBox href={`/irp`} background="#eee" ripple animate>
          <S.MainItem>IRP</S.MainItem>
        </LinkButtonBox>
      </S.MainWrap>
    </S.container>
  );
}
