"use client"

import style from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { KAKAO_AUTH_URL } from '@/config';

export default async function LoginPage() {
    return (
        <div className={style.container}>
            <div className={style.app_icon_box}>
                <Image
                    src='/finhub_app_icon.svg'
                    alt='finhub app icon'
                    width={100}
                    height={100}
                />
                <Image
                    src='/finhub_logo_green.svg'
                    alt='finhub logo'
                    width={100}
                    height={30}
                />
                <p className={style.text}>쉬운 금융 지식 서비스 핀허브</p>
            </div>
            <div className={style.button_area}>
                <Link href={KAKAO_AUTH_URL} className={style.kakao_login}>
                    <Image 
                        className={style.kakao_login_icon}
                        src='/icons/kakao.svg' 
                        alt='kakao icon'
                        width={18} 
                        height={18} 
                    />
                    카카오로 로그인
                </Link>
                <Link href='/' className={style.not_login}>로그인 없이 둘러보기</Link>
            </div>
        </div>
    )
}