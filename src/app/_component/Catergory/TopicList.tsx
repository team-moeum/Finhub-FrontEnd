"use client"

import style from "./TopicList.module.css";
import cx from 'classnames';
import { useState } from "react";

function TopicItem() {
    const [heart, setHeart] = useState(false);

    const handleHeartClick = () => {
        if (!heart) setHeart(true);
        else setHeart(false);
    }

    return (
        <div className={style.item_container}>
            <div className={style.img_box}></div>
            <div className={style.content_box}>
                <p>주식이란?</p>
                <p>주식이란 주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 머시기 머시기</p>
            </div>
            <div className={cx([style.heart_icon_box, heart && style.active])} onClick={handleHeartClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none">
                <path stroke="#50BF50" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.458 2.591a5.255 5.255 0 0 0-1.708-1.177 5.122 5.122 0 0 0-4.028 0 5.255 5.255 0 0 0-1.708 1.177L11 3.638 9.986 2.59a5.183 5.183 0 0 0-3.722-1.59 5.183 5.183 0 0 0-3.722 1.59A5.52 5.52 0 0 0 1 6.431a5.52 5.52 0 0 0 1.542 3.841l1.014 1.047L11 19l7.444-7.681 1.014-1.047a5.445 5.445 0 0 0 1.141-1.762 5.58 5.58 0 0 0 0-4.157 5.445 5.445 0 0 0-1.141-1.762Z"/>
                </svg>
            </div>
        </div>
    )
}

function AddTopicItem() {
    return (
        <div className={style.add_topic}>
            <p>더보기</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" fill="none">
                <path stroke="#D9D7CF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 1 5.5 6 1 1"/>
            </svg>
        </div>
    )
}


export default function TopicList() {
    return (
        <div className={style.topic_list}>
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
            <AddTopicItem />
        </div>
    )
}