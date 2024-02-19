"use client";

import style from './HomeContent.module.css';
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { activeCategory } from "@/recoil/atoms/activeCategory";
import CategoryItemList from "./CatergoryItemList";
import TopicList from "./TopicList";

export type TopicItemType = {
    id: number;
    title: string;
    category: string;
    content: string;
    scrap: boolean;
};

export type TopicDataTypes = {
    [key: string]: TopicItemType[];
};

const topicData:TopicDataTypes = {
    "주식" : [
        {id:1, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:true},
        {id:2, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:3, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:4, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:5, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:6, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:7, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
        {id:8, title: "주식이란?", category:"주식", content: "주식이란 자본회사의 자본을 이루는 어쩌구 저쩌구", scrap:false},
    ],
    "펀드" : [
        {id:1, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:2, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:3, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:4, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:5, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:6, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:7, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:8, title: "펀드란?", category:"펀드", content: "펀드란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
    ],
    "etf" : [
        {id:1, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:2, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:3, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:4, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:5, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:6, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:7, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
        {id:8, title: "ETF란?", category:"etf", content: "ETF란 어쩌구 저쩌구 어쩌구 저쩌구", scrap:false},
    ],
}

const categoryData = [
    {name: "주식"},
    {name: "펀드"},
    {name: "etf"},
    {name: "irp"},
    {name: "연금"},
    {name: "파생상품"},
    {name: "test1"},
    {name: "test2"},
    {name: "test3"},
    {name: "test4"},
]

export default function HomeContent() {
    const [activeItem] = useRecoilState(activeCategory);
    const [filteredTopicData, setFilteredTopicData] = useState<TopicItemType[]>([]);

    useEffect(() => {
        const dummyList = ["주식", "펀드", "etf"];
        if (dummyList.includes(activeItem)) {
            setFilteredTopicData(topicData[activeItem]);
        } else {
            setFilteredTopicData(topicData["주식"]);
        }
    }, [activeItem])

    return (
        <div className={style.container}>
            <div className={style.category_box}>
                <p className={style.title}>카테고리</p>
                <CategoryItemList categoryList={categoryData}/>
            </div>
            <div className={style.topic_container}>
                <TopicList topicList={filteredTopicData} />
            </div>
        </div>
    )
}