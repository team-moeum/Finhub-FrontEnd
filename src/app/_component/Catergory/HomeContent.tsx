"use client";

import style from './HomeContent.module.css';
import React, { Suspense } from "react";
import { useRecoilState } from "recoil";
import { activeCategory } from "@/recoil/atoms/activeCategory";
import CategoryItemList from "./CatergoryItemList";
import TopicList from "./TopicList";
import Loading from '@/app/loading';

export default function HomeContent() {
    const [activeItem] = useRecoilState(activeCategory);
    
    return (
        <div className={style.container}>
            <div className={style.category_box}>
                <p className={style.title}>카테고리</p>
                <CategoryItemList />
            </div>
            <div className={style.topic_container}>
                <Suspense fallback={<Loading />}>
                    <TopicList activeItem={activeItem} />
                </Suspense>
            </div>
        </div>
    )
}

