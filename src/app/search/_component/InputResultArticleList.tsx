import style from './InputResultArticleList.module.css'
import reactStringReplace from 'react-string-replace';

import Loading from '@/app/loading';
import { SearchResult } from '@/model/SearchTopic';
import { ColumnInfiniteQueryType } from './SearchScreen';

import ArrowDownIcon from '@/public/icons/icon_arrow_down.svg';

const highlightKeyword = (keyword: string, text: string) => {
  return reactStringReplace(text, keyword, (match, i) => (
    <span key={i} style={{ color: '#50BF50' }}>{match}</span>
  ));
}

type ItemProps = {
  keyword: string;
  title: string;
  content: string;
}
const Item = ({ keyword, title, content }: ItemProps) => {
  return (
    <div className={style.item_box}>
      <div className={style.text_box}>
        <span className={style.title}>
          {highlightKeyword(keyword, title)}
        </span>
        <span className={style.content}>
          {highlightKeyword(keyword, content)}
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

  if (topicInfiniteQuery.isColumnFetching) return <Loading height={100} />;
  return (
    <>
      <div className={style.container}>
        {resultSearchList ?
          resultSearchList.map((v, i) => (
            <Item key={i} keyword={keyword} title={v.title} content={v.summary} />
          ))
          :
          <div>No data</div>
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

