'use client'
import React, { useState } from 'react';
import MainNav from '@/app/_component/Nav/MainNav';
import style from './QuizPage.module.css'
import QuizCalendar from './_component/QuizCalendar';
import QuizList from './_component/QuizList';
import {useRef} from 'react'

export default function QuizPage() {

   const [isOpen,setIsOpen]=useState(true);
   const hideMainNav=()=>{
      setIsOpen(false);
   };



    return (
        
      
           <>
          {isOpen && <MainNav />}
          
            
               
          <div className={style.title_box}> 
              <div className={style.title}>오늘의 퀴즈!</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect x="3" y="6" width="18" height="15" rx="2" stroke="#7B8287" stroke-width="2"/>
<path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="#7B8287"/>
<path d="M7 3L7 6" stroke="#7B8287" stroke-width="2" stroke-linecap="round"/>
<path d="M17 3L17 6" stroke="#7B8287" stroke-width="2" stroke-linecap="round"/>
<rect x="7" y="12" width="4" height="2" rx="0.5" fill="#7B8287"/>
<rect x="7" y="16" width="4" height="2" rx="0.5" fill="#7B8287"/>
<rect x="13" y="12" width="4" height="2" rx="0.5" fill="#7B8287"/>
<rect x="13" y="16" width="4" height="2" rx="0.5" fill="#7B8287"/>
</svg>
       
       
       
     </div>
     <QuizCalendar/>
   
   <div className={style.divider}></div>
   <QuizList hideMainNav={hideMainNav}/>

   </>
        
    );
}


