"use client"

import { PopularKeyword, TrendType } from "@/model/PopularKeyword";
import style from "./TopSearch.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePopularKeywordList } from "@/states/server/queries";
import { dateFormatter } from "@/utils/formatter";
import { isEmpty } from "@/utils/isEmpty";

export const TrendImageMap = {
  Increased: '/icons/trend_increased.svg',
  Decreased: '/icons/trend_decreased.svg',
  Stable: '/icons/trend_stable.svg',
}

const mockList: PopularKeyword[] = [
  {
    "rank": 1,
    "keyword": "주식 최근 동향",
    "trend": "New"
  },
  {
    "rank": 2,
    "keyword": "채권",
    "trend": "Increased"
  },
  {
    "rank": 3,
    "keyword": "인기 검색어",
    "trend": "Decreased"
  },
  {
    "rank": 4,
    "keyword": "최대 단어 길이는 이렇습니다",
    "trend": "Decreased"
  },
  {
    "rank": 5,
    "keyword": "최대 단어 길이는 이 정도가 됩니다",
    "trend": "Stable"
  }
]

type RecentItemProps = {
  rank: number;
  name: string;
  trend: TrendType;
  onClick: () => void;
}

const TopSearchItem = ({ rank, name, trend, onClick }: RecentItemProps) => {
  return (
    <div className={style.item_row} onClick={onClick}>
      <div className={style.rank}>{rank}</div>
      <div className={style.item_name}>{name}</div>
      <div className={style.trend_icon}>
        {trend === "New" ?
          "New"
          :
          <Image
            src={TrendImageMap[trend]}
            alt="trend icon"
            width={16}
            height={19}
          />
        }
      </div>
    </div>
  )
}

type TopSearchProps = {
  onItemSelect: (value: string) => void;
}

export default function TopSearch({ onItemSelect }: TopSearchProps) {
  const [showInfo, setShowInfo] = useState(false);
  const {data: resultData } = usePopularKeywordList();
  const {
    date,
    popularSearchList
  } = resultData;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.header_box}>
          <div className={style.title}>인기 검색어</div>
          {!isEmpty(popularSearchList) && 
            <div className={style.right}>
              <div className={style.date}>{`${dateFormatter(date, 0)} 기준`}</div>
              <Image
                onClick={() => setShowInfo(true)}
                src='/icons/question_icon.svg'
                alt="question icon"
                width={22}
                height={22}
              />
            </div>
          }
        </div>
        {showInfo && 
          <div className={style.info_box}>
            <p>지난주 월요일부터 일요일까지 산출한 인기 검색어입니다.</p>
            <Image
              onClick={() => setShowInfo(false)} 
              src='/icons/close_green.svg'
              alt="close icon"
              width={12}
              height={12}
            />
          </div>
        }
      </div>
      {!isEmpty(popularSearchList) ? 
        <div className={style.top_search_box}>
          {mockList.map((v, i) => (
            <TopSearchItem
              key={i}
              rank={v.rank}
              name={v.keyword}
              trend={v.trend}
              onClick={() => onItemSelect(v.keyword)} />
          ))}
        </div>
        :
        <div className={style.no_data}>
          <Image 
            src='/images/popular_search_not_found.png'
            alt="순위 집계 이미지"
            width={170}
            height={160}
          />
          <p>인기 검색어 순위 집계 중입니다!</p>
          <p>조금만 기다려주세요!</p>
        </div>
      }
    </div>
  )
}