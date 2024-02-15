"use client";

import { debounce } from "@/utils/debounce";
import React, { use, useRef, useState } from "react";
import BackButton from "../_component/Nav/BackButton";
import style from "./search.module.css";
import InputResultArticleList from "./_component/InputResultArticleList";
import InputResultWordList from "./_component/InputResultWordList";
import NoSearchResult from "./_component/NoSearchResult";
import RecentSearch from "./_component/RecentSearch";
import TopSearch from "./_component/TopSearch";
import cx from "classnames";

interface DataStructure {
    [key: string]: {
        word: Array<{ title: string; content: string; }>;
        article: Array<{ title: string; content: string; }>;
    };
}

const data:DataStructure = {
    "주식" : {
        "word" : [
            {"title" : "주식이란?", "content" : "주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "주식이란?", "content" : "주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "주식이란?", "content" : "주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "주식이란?", "content" : "주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "주식이란?", "content" : "주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
        ],
        "article" : [
            {"title" : "초보자도 주식 할 수 있다!", "content" : "주식거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 주식 할 수 있다, 초보자를 위한 꿀팁 7가지!", "content" : "주식거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 주식 할 수 있다!", "content" : "주식거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 주식 할 수 있다!", "content" : "주식거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
        ]
    },
    "펀드" : {
        "word" : [
            {"title" : "펀드이란?", "content" : "펀드회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "펀드이란?", "content" : "펀드회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "펀드이란?", "content" : "펀드회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "펀드이란?", "content" : "펀드회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
            {"title" : "펀드이란?", "content" : "펀드회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권)."},
        ],
        "article" : [
            {"title" : "초보자도 펀드 할 수 있다!", "content" : "펀드거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 펀드 할 수 있다, 초보자를 위한 꿀팁 7가지!", "content" : "펀드거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 펀드 할 수 있다!", "content" : "펀드거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
            {"title" : "초보자도 펀드 할 수 있다!", "content" : "펀드거래나 온라인 트레이딩에 익숙한 분들이라면 ‘트레이더들 중 90%는 돈을 벌지 못한다’는 이야기를 한번쯤은 들어보셨을 것입니다. 즉, 투자자들의 80%는 손실을 보고, 10%는 현상유지만을 하며, 나머지 10%만이 꾸준히 수익을 얻어냅니다. 투자자라면 누구나 이 ‘상위 10%’에 들고 싶어할 것입니다. 하지만 이같은 목표를 추구하기에 앞서, 과연 본인 스스로에게 ‘왜 절대 다수인 90%는 돈을 벌지 못할까?’라는 질문을 던져 보셨나요? 이 ‘하위 90%’의 트레이더들이 지닌 공통점은 과연 무엇일까요?"},
        ]
    }
}

type recentDataType = Array<{name: string}>

const recentData:recentDataType = [
    {name: "주식"},
    {name: "주식이란"},
    {name: "최대 단어 길이 몇으로?"},
    {name: "펀드란?"},
    {name: "연말정산"},
    {name: "검색어 검색어"},
]

export default function SearchPage() {
    const [userInput, setUserInput] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [wordResult, setWordResult] = useState<Array<{ title: string; content: string; }> | null>(null);
    const [articleResult, setArticleResult] = useState<Array<{ title: string; content: string; }> | null>(null);
    const [isNoneResult, setIsNoneResult] = useState(true);
    const [recentDataList, setRecentDataList] = useState<recentDataType>(recentData);

    const inputRef = useRef<HTMLInputElement>(null);

    // TEST 
    const dataKeyList = ["펀드", "주식"];
    const fetchData = (input:string) => {
        if (dataKeyList.includes(input)) {
            const resultWordList = data[input]['word'];
            const resultArticleList = data[input]['article'];

            setWordResult(resultWordList);
            setArticleResult(resultArticleList);
            setIsNoneResult(false);
        } else {
            setWordResult(null);
            setArticleResult(null);
            setIsNoneResult(true);
        }
    }

    const updatedRecentDataList = (value : string) => {
        const updatedRecentDataList = [{ name: value }, ...recentDataList];
            
        if (updatedRecentDataList.length > 15) {
            updatedRecentDataList.pop();
        }

        setRecentDataList(updatedRecentDataList);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setUserInput('');
        }
        setUserInput(e.target.value);
        fetchData(e.target.value);	
    };

    const debouncedOnChangeHandler = debounce<typeof onChangeHandler>(onChangeHandler, 500);

    const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputValue = (e.currentTarget.elements.namedItem('searchInput') as HTMLInputElement).value;
    
        /* 동일 input 방지 */
        if(recentDataList[0].name !== inputValue) {
            console.log(inputValue);
            setUserInput(inputValue);
            fetchData(inputValue);
            updatedRecentDataList(inputValue);
        }
    }
    
    const hanldeClearBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = ''
            inputRef.current.focus();
            setUserInput('');
        }
    }

    const handleOnFocus = () => {
        setIsFocus(true);
    };
    
    const handleOnBlur = () => {
        setIsFocus(false);
    };
    

    /* RecentSearch Prop */
    const handleSetInputValue = (value: string) => {
        if (inputRef.current) {
          inputRef.current.value = value;
          setUserInput(value);
          fetchData(value);
          updatedRecentDataList(value);
        }
    };


    return (
        <div className={style.container}>
            <div className={style.header}>
                <BackButton />
                <div className={style.input_box}>
                    <form onSubmit={handleInputSubmit}>
                        <input
                            type="search"
                            inputMode="search"
                            name="searchInput"
                            ref={inputRef} 
                            className={style.inputBox} 
                            placeholder="찾고 싶은 단어를 입력해주세요." 
                            onChange={debouncedOnChangeHandler}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                        />
                        <svg className={style.search_icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" fill="#50BF50"/>
                        </svg>
                        <button type="button" className={cx([style.clear_btn, isFocus && style.focus])} onClick={hanldeClearBtn}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#D9D9D9"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0876 6.08736C6.31541 5.85955 6.68475 5.85955 6.91256 6.08736L10.0001 9.17488L13.0876 6.08736C13.3154 5.85955 13.6848 5.85955 13.9126 6.08736C14.1404 6.31516 14.1404 6.68451 13.9126 6.91232L10.825 9.99984L13.9126 13.0874C14.1404 13.3152 14.1404 13.6845 13.9126 13.9123C13.6848 14.1401 13.3154 14.1401 13.0876 13.9123L10.0001 10.8248L6.91256 13.9123C6.68475 14.1401 6.31541 14.1401 6.0876 13.9123C5.8598 13.6845 5.8598 13.3152 6.0876 13.0874L9.17512 9.99984L6.0876 6.91232C5.8598 6.68451 5.8598 6.31516 6.0876 6.08736Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            {userInput ?
                <div className={style.after_input}>
                    {isNoneResult ? 
                        <NoSearchResult userInput={userInput}/>
                    :
                        <>
                            <span className={style.title}>단어</span>
                            {wordResult ? <InputResultWordList data={wordResult}/> :  <div className={style.no_result}>검색 결과 없어용</div>}
                            <div className={style.divider}></div>
                            <span className={cx(style.title, style.mt35)}>아티클</span>
                            {articleResult ? <InputResultArticleList data={articleResult}/> : <div className={style.no_result}>검색 결과 없어용</div>}
                        </>
                    }
                </div>
            :
                <div className={style.before_input}>
                    <RecentSearch data={recentDataList}/>
                    <div className={style.divider}></div>
                    <TopSearch onItemSelect={handleSetInputValue} />
                </div>
            }
        </div>
    );
}
