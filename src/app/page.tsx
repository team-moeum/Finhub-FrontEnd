"use client";

import React from "react";
import LinkButton from "@/components/Button/LinkButton";
import * as S from "./page.style";

export default function Home() {
  return (
    <S.container>
      <S.MainWrap>
        <LinkButton href={`/stock`} background="#eee" ripple animate>
          <S.MainItem>주식</S.MainItem>
        </LinkButton>

        <LinkButton href={`/fund`} background="#eee" ripple animate>
          <S.MainItem>펀드</S.MainItem>
        </LinkButton>

        <LinkButton href={`/etf`} background="#eee" ripple animate>
          <S.MainItem>ETF</S.MainItem>
        </LinkButton>

        <LinkButton href={`/irp`} background="#eee" ripple animate>
          <S.MainItem>IRP</S.MainItem>
        </LinkButton>
      </S.MainWrap>
    </S.container>
  );
}
