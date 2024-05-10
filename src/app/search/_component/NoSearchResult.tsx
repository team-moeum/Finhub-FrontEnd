'use client';

import style from './NoSearchResult.module.css';
import { useState } from 'react';

import { useToast } from '@/components/Toast/useToast';
import { useUpdateNoSearchWord } from '@/states/server/mutations';
import { NotWordDuplicate, NotWordOneTime, NotWordSuccess } from '@/components/Toast/ToastTemplates';

import ArrowRightIcon from '@/public/icons/icon_arrow_right.svg';
import NoSearchIcon from '@/public/icons/no_search_icon.svg';

export default function NoSearchResult({ userInput }: { userInput: string }) {
  const [request, setRequest] = useState(false);
  const { showToast } = useToast();

  const noSearchWordMutation = useUpdateNoSearchWord({
    onSuccess: (data) => {
      setRequest(true);
      if (data.data === '이미 요청처리 된 단어입니다.')
        return showToast({ content: <NotWordDuplicate /> });
      showToast({ content: <NotWordSuccess /> });
    },
    onError: () => {
      showToast({ content: "❌ 잠시 후 다시 시도해주세요!" })
    }
  });

  const handleRequestClick = () => {
    if (!request) return noSearchWordMutation.mutate({ keyword: userInput });
    showToast({ content: <NotWordOneTime /> })
  }

  return (
    <div className={style.container}>
      <div className={style.icon_box}>
        <NoSearchIcon />
      </div>
      <div className={style.text_box}>
        <span><span className={style.user_input_text}>&apos;{userInput}&apos;</span>에 대한 검색 결과가 없습니다.</span>
        <span className={style.dot}>· 단어의 철자가 정확한지 확인해 주세요.</span>
        <span className={style.dot}>· 다른 검색어로 다시 검색해 보세요.</span>
      </div>
      <button className={style.call_btn} onClick={handleRequestClick}>
        없는 단어 요청하기
        <ArrowRightIcon />
      </button>
    </div>
  )
}