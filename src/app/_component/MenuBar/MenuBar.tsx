'use client';

import Link from "next/link";
import React from "react";
import style from "./MenuBar.module.css";
import cx from 'classnames';
import { usePathname } from "next/navigation";

export default function MenuBar() {
    const pathName = usePathname();

    return (
        <div className={style.container}>
            <Link href="/home" className={cx([style.tab, pathName === "/home" && style.active])}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3861 1.71065C11.7472 1.42978 12.2528 1.42978 12.6139 1.71065L21.6139 8.71065C21.8575 8.9001 22 9.19141 22 9.5V20.5C22 21.2957 21.6839 22.0587 21.1213 22.6213C20.5587 23.1839 19.7957 23.5 19 23.5H5C4.20435 23.5 3.44129 23.1839 2.87868 22.6213C2.31607 22.0587 2 21.2957 2 20.5V9.5C2 9.19141 2.14247 8.9001 2.38606 8.71065L11.3861 1.71065ZM4 9.98908V20.5C4 20.7652 4.10536 21.0196 4.29289 21.2071C4.48043 21.3946 4.73478 21.5 5 21.5H19C19.2652 21.5 19.5196 21.3946 19.7071 21.2071C19.8946 21.0196 20 20.7652 20 20.5V9.98908L12 3.76686L4 9.98908Z" fill="current"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 12.5C8 11.9477 8.44772 11.5 9 11.5H15C15.5523 11.5 16 11.9477 16 12.5V22.5C16 23.0523 15.5523 23.5 15 23.5C14.4477 23.5 14 23.0523 14 22.5V13.5H10V22.5C10 23.0523 9.55228 23.5 9 23.5C8.44772 23.5 8 23.0523 8 22.5V12.5Z" fill="current"/>
                </svg>
                <span className={style.text}>홈</span>
            </Link>
            <Link href="/list" className={cx([style.tab, pathName === "/list" && style.active])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <rect x="9" y="4.5" width="13" height="2" rx="1" fill="current"/>
                    <rect x="9" y="11.5" width="13" height="2" rx="1" fill="current"/>
                    <rect x="9" y="18.5" width="13" height="2" rx="1" fill="current"/>
                    <rect x="2" y="3.5" width="4" height="4" stroke="current" strokeWidth="2" strokeLinejoin="round"/>
                    <rect x="2" y="10.5" width="4" height="4" stroke="current" strokeWidth="2" strokeLinejoin="round"/>
                    <rect x="2" y="17.5" width="4" height="4" stroke="current" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className={style.text}>목록</span>
            </Link>
            <Link href="/search" className={cx([style.tab, pathName === "/search" && style.active])}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.75 4.5C7.88401 4.5 4.75 7.63401 4.75 11.5C4.75 15.366 7.88401 18.5 11.75 18.5C15.616 18.5 18.75 15.366 18.75 11.5C18.75 7.63401 15.616 4.5 11.75 4.5ZM2.75 11.5C2.75 6.52944 6.77944 2.5 11.75 2.5C16.7206 2.5 20.75 6.52944 20.75 11.5C20.75 16.4706 16.7206 20.5 11.75 20.5C6.77944 20.5 2.75 16.4706 2.75 11.5Z" fill="current"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6929 16.4429C17.0834 16.0524 17.7166 16.0524 18.1071 16.4429L22.4571 20.7929C22.8476 21.1834 22.8476 21.8166 22.4571 22.2071C22.0666 22.5976 21.4334 22.5976 21.0429 22.2071L16.6929 17.8571C16.3024 17.4666 16.3024 16.8334 16.6929 16.4429Z" fill="current"/>
                </svg>
                <span className={style.text}>검색</span>
            </Link>
            <Link href="/feed" className={cx([style.tab, pathName === "/feed" && style.active])}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3861 1.71065C11.7472 1.42978 12.2528 1.42978 12.6139 1.71065L21.6139 8.71065C21.8575 8.9001 22 9.19141 22 9.5V20.5C22 21.2957 21.6839 22.0587 21.1213 22.6213C20.5587 23.1839 19.7957 23.5 19 23.5H5C4.20435 23.5 3.44129 23.1839 2.87868 22.6213C2.31607 22.0587 2 21.2957 2 20.5V9.5C2 9.19141 2.14247 8.9001 2.38606 8.71065L11.3861 1.71065ZM4 9.98908V20.5C4 20.7652 4.10536 21.0196 4.29289 21.2071C4.48043 21.3946 4.73478 21.5 5 21.5H19C19.2652 21.5 19.5196 21.3946 19.7071 21.2071C19.8946 21.0196 20 20.7652 20 20.5V9.98908L12 3.76686L4 9.98908Z" fill="current"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 12.5C8 11.9477 8.44772 11.5 9 11.5H15C15.5523 11.5 16 11.9477 16 12.5V22.5C16 23.0523 15.5523 23.5 15 23.5C14.4477 23.5 14 23.0523 14 22.5V13.5H10V22.5C10 23.0523 9.55228 23.5 9 23.5C8.44772 23.5 8 23.0523 8 22.5V12.5Z" fill="current"/>
                </svg>
                <span className={style.text}>공사중</span>
            </Link>
            <Link href="/menu" className={cx([style.tab, pathName.includes("/menu") && style.active])}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="current" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.71447 15.9645C5.65215 15.0268 6.92392 14.5 8.25 14.5H16.25C17.5761 14.5 18.8479 15.0268 19.7855 15.9645C20.7232 16.9021 21.25 18.1739 21.25 19.5V21.5C21.25 22.0523 20.8023 22.5 20.25 22.5C19.6977 22.5 19.25 22.0523 19.25 21.5V19.5C19.25 18.7044 18.9339 17.9413 18.3713 17.3787C17.8087 16.8161 17.0456 16.5 16.25 16.5H8.25C7.45435 16.5 6.69129 16.8161 6.12868 17.3787C5.56607 17.9413 5.25 18.7044 5.25 19.5V21.5C5.25 22.0523 4.80228 22.5 4.25 22.5C3.69772 22.5 3.25 22.0523 3.25 21.5V19.5C3.25 18.1739 3.77678 16.9021 4.71447 15.9645Z" fill="current"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.25 4.5C10.5931 4.5 9.25 5.84315 9.25 7.5C9.25 9.15685 10.5931 10.5 12.25 10.5C13.9069 10.5 15.25 9.15685 15.25 7.5C15.25 5.84315 13.9069 4.5 12.25 4.5ZM7.25 7.5C7.25 4.73858 9.48858 2.5 12.25 2.5C15.0114 2.5 17.25 4.73858 17.25 7.5C17.25 10.2614 15.0114 12.5 12.25 12.5C9.48858 12.5 7.25 10.2614 7.25 7.5Z" fill="current"/>
                </svg>
                <span className={style.text}>메뉴</span>
            </Link>
        </div>
    );
}
