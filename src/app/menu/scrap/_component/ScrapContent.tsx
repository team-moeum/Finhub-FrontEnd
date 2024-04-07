'use client'

import { useEffect, useState } from 'react';
import style from './ScrapContent.module.css';
import cx from 'classnames';
import { Topic } from '@/model/Topic';
import ScrapIcon from "@/assets/Icons";
import Link from 'next/link';

const data = {
    "word" : [
        {topicId:1, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:2, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:3, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true}
    ],
    "article" : [
        {topicId:11, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:22, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:33, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:44, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:55, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:66, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
        {topicId:77, title: "주식이란?", categoryName:"주식", categoryId:1, summary: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrapped:true},
    ]
}

export function ScrapItem({data}: {data: Topic}) {

    const handleScrapClick = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("scrap 해제");
    }

    return (
      <Link href={`/${data.categoryId}/${data.topicId}`}>
          <div className={style.item_container}>
              <div className={style.img_box}></div>
              <div className={style.content_box}>
                  <p>{data.title}</p>
                  <p>{data.summary}</p>
              </div>
              <div className={style.icon_box} onClick={handleScrapClick}>
                  <ScrapIcon active={true} />
              </div>
          </div>
      </Link>
    )
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
               <li onClick={() => handleToggleClick("article")}>컬럼</li>  
            </ul>
            <div className={style.item_list}>
                <div className={style.topic_list}>
                    {filteredTopicData.map(item => (
                        <ScrapItem 
                            key={`${item.categoryName}_${item.topicId}`}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}