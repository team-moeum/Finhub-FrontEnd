"use client";

import style from './HomeContent.module.css';
import React, { Suspense } from "react";
import { useRecoilState } from "recoil";
import { activeCategory } from "@/states/client/atoms/activeCategory"
import CategoryItemList from "./CatergoryItemList";
import TopicList from "./TopicList";
import Loading from '@/app/loading';
import { AnimatePresence } from 'framer-motion';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { activeLoginModal } from '@/states/client/atoms/activeLoginModal';
import LoginModalContent from './LoginModalContent';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
    const [activeItem] = useRecoilState(activeCategory);
    const [activeLogin, setActiveLogin] = useRecoilState(activeLoginModal);

    return (
        <div className={style.container}>
            <div className={style.category_box}>
                <div className={style.category_header}>
                    <p className={style.title}>카테고리</p>
                    <Link className={style.link_text} href={`/list?categoryId=${activeItem.id}`}>
                        <strong>'{activeItem.name}'</strong> 글 전체 보기
                        <Image 
                            src='/icons/arrow_right_green.svg'
                            alt='arrow right icon'
                            width={14}
                            height={10}
                        />
                    </Link>
                </div>
                <CategoryItemList />
            </div>
            <div className={style.topic_container}>
                <Suspense fallback={<Loading height={200}/>}>
                    <TopicList activeItem={activeItem} />
                </Suspense>
            </div>
            <AnimatePresence>
                {activeLogin && 
                    <BottomSheet 
                        isOpen={true} 
                        onClose={() => setActiveLogin(false)}
                    >
                        <LoginModalContent onClose={() => setActiveLogin(false)}/>
                    </BottomSheet>
                }
            </AnimatePresence>
        </div>
    )
}

