'use client';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PigIcon from '@/public/icons/pig.svg';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CategoryCard.css";
import { useBannerList } from '@/states/server/queries';

export default function CategoryCard() {
    const { data: BannerList } = useBannerList();
    
    return (
        <div className='overflow-wrap'>
             <Swiper
                className="cg_card_swiper"
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay = {{ delay: 3000 }}
                speed={1000}
                loop={true}
                pagination={{ clickable: true}}
            >
                <SwiperSlide>
                    <div className="card">
                        <div className="img-box">
                            <Image
                                src={PigIcon}
                                alt={'pig-icon'}
                                width={80}
                                height={64}
                            />
                        </div>
                        <div className="text-container">
                            <div className="text-box">
                                <p className="title">초보자도 주식 할 수 있다!</p>
                                <p className="content">주식을 처음할 때 꼭 알아야 하는<br />기초 지식 7가지</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="img-box">
                            <Image
                                src={PigIcon}
                                alt={'pig-icon'}
                                width={80}
                                height={64}
                            />
                        </div>
                        <div className="text-container">
                            <div className="text-box">
                                <p className="title">초보자도 주식 할 수 있다!</p>
                                <p className="content">주식을 처음할 때 꼭 알아야 하는<br />기초 지식 7가지</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className="card">
                        <div className="img-box">
                            <Image
                                src={PigIcon}
                                alt={'pig-icon'}
                                width={80}
                                height={64}
                            />
                        </div>
                        <div className="text-container">
                            <div className="text-box">
                                <p className="title">초보자도 주식 할 수 있다!</p>
                                <p className="content">주식을 처음할 때 꼭 알아야 하는<br />기초 지식 7가지</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}