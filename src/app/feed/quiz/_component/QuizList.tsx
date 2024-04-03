'use client'
import { Link } from 'react-router-dom';
import style from './QuizList.module.css'
import { useState } from 'react'

export default function QuizList({hideMainNav}:any) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {  
    setIsOpen(true);
    hideMainNav();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={`${style.type} ${style.item_box}`}>
        <button className={`${style.type_sel} ${style.type_font}`}>놓친 문제</button>
        <button className={`${style.type_sel} ${style.type_font}`}>풀었던 문제</button>
      </div>

      <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>

      <button onClick={openModal} className={`${style.more} ${style.item_box}`}>
        더보기
        <svg className={style.icon} width="20" height="20" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L5.5 6L1 1" stroke="#A6ABAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`${style.btnClick} ${isOpen ? style.open : ''}`}>
        <a href='quiz' className={style.top}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
<path d="M7 1L1 7L7 13" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
      <div className={`${style.type} ${style.item_box}`}>
        <button className={`${style.type_sel} ${style.type_font}`}>놓친 문제</button>
        <button className={`${style.type_sel} ${style.type_font}`}>풀었던 문제</button>
      </div>
      <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>

    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
    <button className={style.item_box}>
        <p className={style.item_box_font}>✏️ 금리가 오르면 부동산 시장이 침체된다?</p>
        <div className={style.item_box_cal}>2024. 02. 13.</div>
    </button>
      </div>
    </div>
  );
}
