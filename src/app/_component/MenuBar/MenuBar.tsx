'use client';

import Link from "next/link";
import React from "react";
import style from "./MenuBar.module.css";
import cx from 'classnames';
import { usePathname } from "next/navigation";

import HomeIcon from '@/public/menuBar/home.svg';
import ListIcon from '@/public/menuBar/list.svg';
import SearchIcon from '@/public/menuBar/search.svg';
import FeedIcon from '@/public/menuBar/feed.svg';
import MenuIcon from '@/public/menuBar/menu.svg';

export const MENUBAR_HEIGHT = 54;

export default function MenuBar() {
  const pathName = usePathname();

  return (
    <div className={style.container}>
      <Link href="/home" className={cx([style.tab, pathName === "/home" && style.active])}>
        <HomeIcon />
        <span className={style.text}>홈</span>
      </Link>
      <Link href="/list" className={cx([style.tab, pathName === "/list" && style.active])}>
        <ListIcon />
        <span className={style.text}>목록</span>
      </Link>
      <Link href="/search" className={cx([style.tab, pathName === "/search" && style.active])}>
        <SearchIcon />
        <span className={style.text}>검색</span>
      </Link>
      <Link href="/feed" className={cx([style.tab, pathName === "/feed" && style.active])}>
        <FeedIcon />
        <span className={style.text}>피드</span>
      </Link>
      <Link href="/menu" className={cx([style.tab, pathName.includes("/menu") && style.active])}>
        <MenuIcon />
        <span className={style.text}>메뉴</span>
      </Link>
    </div>
  );
}
