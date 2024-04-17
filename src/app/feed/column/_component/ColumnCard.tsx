"use client";

import Image from "next/image"
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ColumnCard.css';
import ColumnCardImg from "./ColumnCardImg";

const ColumnData = [
    {
        id: 1,
        title: "초보자도 주식 할 수 있다! 주식 기본 꿀팁",
        date: "2024.03.11",
        tag: ["#주식", "#ETF"],
        content: "냥냥",
        summary: "요약글입니다"
    },
    {
        id: 2,
        title: "초보자도 주식 할 수 있다! 주식 기본 꿀팁",
        date: "2024.03.11",
        tag: ["#주식", "#ETF"],
        content: "냥냥",
        summary: "요약글입니다"
    },
    {
        id: 3,
        title: "초보자도 주식 할 수 있다! 주식 기본 꿀팁",
        date: "2024.03.11",
        tag: ["#주식", "#ETF"],
        content: "냥냥",
        summary: "요약글입니다"
    }
]

export default function ColumnCard() {
    return (
        <div>
             <Swiper
                className="column_swiper"
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay = {{ delay: 3000 }}
                speed={2000}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper : any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <ColumnCardImg />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <ColumnCardImg />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <ColumnCardImg />   
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <ColumnCardImg />   
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <ColumnCardImg />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}