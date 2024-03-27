"use client";

import Image from "next/image"
import Link from "next/link"
import style from "./ColumnCard.module.css"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ColumnData = {
    title: "초보자도 주식 할 수 있다! 주식 기본 꿀팁",
    date: "2024.03.11",
    tag: ["#주식", "#ETF"],
    content: "냥냥",
    summary: "요약글입니다"
}

export default function ColumnCard() {
    return (
        <div>
             <Swiper
                // className=""
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
                        <div className={style.slide_img}>
                            <Image 
                                src="/column/column_banner.png"
                                alt="Column Card"
                                fill
                            />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <div className={style.slide_img}>
                            <Image 
                                src="/column/column_banner.png"
                                alt="Column Card"
                                fill
                            />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/feed/column/column_post_test">
                        <div className={style.slide_img}>
                            <Image 
                                src="/column/column_banner.png"
                                alt="Column Card"
                                fill
                            />
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}