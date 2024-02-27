'use client'

import { useEffect, useState } from 'react';
import style from './ScrapContent.module.css';
import cx from 'classnames';
import { Topic } from '@/model/Topic';
import { TopicItem } from '@/app/_component/Catergory/TopicList';

const data = {
    "word" : [
        {id:1, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:2, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:3, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true}
    ],
    "article" : [
        {id:11, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:22, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:33, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:44, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:55, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:66, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:77, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
    ]
}

type toggleTypes = "word" | "article";

export default function ScrapContent() {
    const [toggle, setToggle] = useState<toggleTypes>("word");
    const [filteredTopicData, setFilteredTopicData] = useState<Topic[]>(data[toggle]);

    const handleToggleClick = (item:toggleTypes) => {
        setToggle(item);
    }

    useEffect(() => {
        setFilteredTopicData(data[toggle])
    }, [toggle])

    return (
        <div className={style.container}>
            <ul className={cx([style.toggle_box, toggle === "article" && style.slide])}>
               <li onClick={() => handleToggleClick("word")}>단어</li>
               <li onClick={() => handleToggleClick("article")}>아티클</li>  
            </ul>
            <div className={style.item_list}>
                <div className={style.topic_list}>
                    {filteredTopicData.map(item => (
                        <TopicItem 
                            key={`${item.category}_${item.id}`}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}