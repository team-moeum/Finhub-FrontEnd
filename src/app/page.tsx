'use client'

import Link from 'next/link';
import React from 'react';
import ButtonBox from './components/Button/ButtonBox'
import * as S from './page.style'


export default function Home() {

  return (
    <S.container>
      <S.MainWrap>
        <Link href={`/stock`}>
          <ButtonBox animate style={{background: '#000'}}>
            <S.MainItem>주식</S.MainItem>
          </ButtonBox>
        </Link>

        <Link href={`/fund`}>
          <ButtonBox animate style={{background: '#000'}}>
            <S.MainItem>펀드</S.MainItem>
          </ButtonBox>
        </Link>

        <Link href={`/etf`}>
          <ButtonBox animate style={{background: '#000'}}>
            <S.MainItem>ETF</S.MainItem>
          </ButtonBox>
        </Link>

        <Link href={`/irp`}>
          <ButtonBox animate style={{background: '#000'}}>
            <S.MainItem>IRP</S.MainItem>
          </ButtonBox>
        </Link>
      </S.MainWrap>
    </S.container>
  )
}
