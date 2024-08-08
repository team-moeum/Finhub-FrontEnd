"use client";

import style from './InputResultArticleList.module.css'

import Loading from '@/app/loading';
import { SearchResult } from '@/model/SearchTopic';
import { highlightKeyword } from '../utils/highlightKeyword';
import { ColumnInfiniteQueryType } from './SearchScreen';

import ArrowDownIcon from '@/public/icons/icon_arrow_down.svg';

type ItemProps = {
  keyword: string;
  item: SearchResult;
}
const Item = ({ keyword, item }: ItemProps) => {
  return (
    <div className={style.item_box}>
      <div className={style.text_box}>
        <span className={style.title}>
          {highlightKeyword(keyword, item.title)}
        </span>
        <span className={style.content}>
          {highlightKeyword(keyword, item.summary)}
        </span>
      </div>
    </div>
  )
}

type dataType = {
  keyword: string,
  topicInfiniteQuery: ColumnInfiniteQueryType,
}
export default function InputResultArticleList({ keyword, topicInfiniteQuery }: dataType) {
  const resultSearchList = topicInfiniteQuery.resultColumnSearchList as SearchResult[];

  const handleNextPageClick = () => {
    topicInfiniteQuery.fetchColumnNextPage();
  };

  return (
    <>
      <div className={style.container}>
        {resultSearchList &&
          resultSearchList.map((item, index) => (
            <Item key={index} keyword={keyword} item={item} />
          ))
        }
      </div>
      {topicInfiniteQuery.hasColumnNextPage &&
        <div className={style.more_btn} onClick={handleNextPageClick}>
          더보기
          <ArrowDownIcon />
        </div>
      }
    </>
  )
}