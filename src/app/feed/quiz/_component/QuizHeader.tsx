"use client";

import Link from "next/link";
import style from './QuizHeader.module.css';
import cx from 'classnames';
import LinkButton from "@/app/_component/UiComponent/LinkButton";

export default function QuizHeader() {
    return(
        <div className={style.container}>
            <p className={style.title}>오늘의 퀴즈!</p>
            <Link  href={'/feed/quiz'} >
                <div className={`${style.btn} ${style.f}` }>
                   지난 퀴즈 보기
                </div>
                           
                        
            </Link> 
                    
        </div>

    )
}