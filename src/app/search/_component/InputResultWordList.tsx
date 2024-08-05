"use client";

import style from './InputResultWordList.module.css'
import Link from 'next/link';

import Loading from '@/app/loading';
import { SearchResult } from '@/model/SearchTopic';
import { highlightKeyword } from '../utils/highlightKeyword';
import { TopicInfiniteQueryType } from './SearchScreen';

import ArrowDownIcon from '@/public/icons/icon_arrow_down.svg';

type ItemProps = {
  keyword: string;
  item: SearchResult;
}
const Item = ({ keyword, item }: ItemProps) => {
  return (
    <Link href={`/${item.categoryId}/${item.topicId}`}>
      <div className={style.item_box}>
        <span className={style.title}>
          {highlightKeyword(keyword, item.title)}
        </span>
        <span className={style.content}>
          {highlightKeyword(keyword, item.summary)}
        </span>
      </div>
    </Link>
  )
}

type dataType = {
  keyword: string,
  topicInfiniteQuery: TopicInfiniteQueryType,
}
export default function InputResultWordList({ keyword, topicInfiniteQuery }: dataType) {
  const resultSearchList = topicInfiniteQuery.resultTopicSearchList as SearchResult[];

  const handleNextPageClick = () => {
    topicInfiniteQuery.fetchTopicNextPage();
  }

  return (
    <>
      <div className={style.container}>
        {resultSearchList &&
          resultSearchList.map((item, index) => (
            <Item key={index} keyword={keyword} item={item} />
          ))
        }
      </div>
      {topicInfiniteQuery.hasTopicNextPage &&
        <div className={style.more_btn} onClick={handleNextPageClick}>
          더보기
          <ArrowDownIcon />
        </div>
      }
    </>
  )
}

