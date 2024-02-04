'use client';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from "./CategoryCard.module.css";

export default function CategoryCard() {
    return (
        <div>
             <Swiper
                className={style.cg_card_swiper}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                //autoplay = {{ delay: 3000, disableOnIntercation: false}}
                //loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper : any) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className={style.card}>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}