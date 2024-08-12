"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Loading from "@/app/loading";

import "./ColumnCard.css";
import ColumnCardImg from "./ColumnCardImg";

import { useGptColumnList } from "@/states/server/queries";

import { gptColumn } from "@/model/GptColumn";

export default function ColumnCard() {
  const { data, isFetching } = useGptColumnList({ page: 1, size: 5 });
  const gptColumnList = data?.pages[0].columnInfo as gptColumn[];

  if (isFetching) return <Loading height={180} />;

  return (
    <Swiper
      className="column_swiper"
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      speed={1500}
      loop={true}
      pagination={{ clickable: true }}
    >
      {gptColumnList.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={`/feed/column/${item.id}`}>
              <ColumnCardImg item={item} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
