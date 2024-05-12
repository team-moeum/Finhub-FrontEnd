'use client'
import React, { Suspense, useState } from 'react';
import MainNav from '@/app/_component/Nav/MainNav';
import style from './QuizPage.module.css'
import QuizList from './_component/QuizList';

import QuizCalIcon from '@/public/quiz/quiz_cal_icon.svg'
import Loading from '@/app/loading';
import dynamic from 'next/dynamic';

const QuizCalendar = dynamic(() => import('./_component/QuizCalendar'), { ssr: false })

export default function QuizPage() {

   const [isOpen, setIsOpen] = useState(true);
   const hideMainNav = () => {
      setIsOpen(false);
   };



   return (
      <>
         {isOpen && <MainNav />}
         <div className={style.title_box}>
            <div className={style.title}>오늘의 퀴즈!</div>
            <QuizCalIcon />
         </div>
         <Suspense fallback={<Loading />}>
            <QuizCalendar />
         </Suspense>
         <div className={style.divider}></div>
         <QuizList hideMainNav={hideMainNav} />
      </>

   );
}


