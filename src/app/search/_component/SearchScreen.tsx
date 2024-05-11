"use client";

import style from "./SearchScreen.module.css";
import cx from "classnames";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

import Loading from "@/app/loading";
import TopSearch from "./TopSearch";
import BackButton from "@/app/_component/Nav/BackButton";
import RecentSearch from "./RecentSearch";
import NoSearchResult from "./NoSearchResult";
import InputResultWordList from "./InputResultWordList";
import InputResultArticleList from "./InputResultArticleList";

import { Tabs } from "@/components/Tabs/Tabs";
import { isEmpty } from "@/utils/isEmpty";
import { useInput } from "../hooks/useInput";
import { useSearch } from "../hooks/useSearch";
import { SearchRequestType, SearchResult } from "@/model/SearchTopic";

import FinhubLogoGrayIcon from '@/public/finhub_logo_gray.svg';
import SearchGrayIcon from '@/public/icons/search_gray.svg';
import SearchCloseIcon from '@/public/icons/search_close_icon.svg';

export type TopicInfiniteQueryType = {
  resultTopicSearchList: SearchResult[];
  fetchTopicNextPage: any;
  hasTopicNextPage: boolean;
  isTopicFetching: boolean;
}

export type ColumnInfiniteQueryType = {
  resultColumnSearchList: SearchResult[];
  fetchColumnNextPage: any;
  hasColumnNextPage: boolean;
  isColumnFetching: boolean;
}

export default function SearchScreen() {
  const [resultTabActive, setResultTabActive] = useState<SearchRequestType>("title");

  const {
    inputRef,
    userInput,
    fetchInput,
    isResultPage,
    isFocus,
    debouncedOnChangeHandler,
    handleSetInputValue,
    handleInputSubmit,
    hanldeClearBtn,
    handleOnBlur,
    handleOnFocus,
    handleClickBackPress,
  } = useInput();

  const {
    isResultEmpty,
    topicInfiniteQuery,
    columnInfiniteQuery
  } = useSearch({ type: resultTabActive, keyword: fetchInput });

  return (
    <div className={style.container}>
      <div className={cx([style.header, !isResultPage && style.focus])}>
        {isResultPage ?
          <BackButton icon="type2" onClick={handleClickBackPress} />
          :
          <div className={style.init_header}>
            <Link href='/home'>
              <FinhubLogoGrayIcon />
            </Link>
          </div>
        }
        <div className={style.input_box}>
          <form onSubmit={handleInputSubmit}>
            <input
              type="search"
              inputMode="search"
              name="searchInput"
              ref={inputRef}
              className={style.inputBox}
              placeholder="검색어를 입력해주세요."
              onChange={debouncedOnChangeHandler}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              maxLength={20}
            />
            <SearchGrayIcon className={style.search_icon} />
            <button type="button" className={cx([style.clear_btn, (isFocus || userInput) && style.focus])} onClick={hanldeClearBtn}>
              <SearchCloseIcon />
            </button>
          </form>
        </div>
      </div>
      {isResultPage ?
        <div className={style.after_input}>
          <div className={style.tab_area}>
            <Tabs
              data={[
                { value: "title", text: "제목" },
                { value: "summary", text: "내용" },
                { value: "both", text: "제목 및 내용" },
              ]}
              defaultValue={resultTabActive}
              onChange={(value: string) => setResultTabActive(value as SearchRequestType)}
              style={{
                width: '100vw',
                position: 'relative',
                left: '-20px'
              }}
            />
          </div>
          {isResultEmpty ?
            <NoSearchResult userInput={userInput} />
            :
            <>
              <span className={style.title}>단어</span>
              <InputResultWordList keyword={fetchInput} topicInfiniteQuery={topicInfiniteQuery} />
              <div className={style.divider}></div>
              <span className={cx(style.title, style.mt35)}>아티클</span>
              <InputResultArticleList keyword={fetchInput} topicInfiniteQuery={columnInfiniteQuery} />
            </>
          }
        </div>
        :
        <div className={style.before_input}>
          <RecentSearch onItemSelect={handleSetInputValue} />
          <Suspense fallback={<Loading height={300} />}>
            <TopSearch onItemSelect={handleSetInputValue} />
          </Suspense>
        </div>
      }
    </div>
  );
}