"use client";

import style from "./RecentSearch.module.css";

import { isEmpty } from "@/utils/isEmpty";
import { useRecoilValue } from "recoil";
import { recentSearchState } from "@/states/client/atoms/recentSearch";
import { useDeleteRecentSearchState } from "../hooks/useRecentSearch";

import CloseIcon from '@/public/icons/icon_close_gray.svg';

type RecentItemProps = {
  name: string;
  onClick: () => void;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RecentItem = ({ name, onClick, onClose }: RecentItemProps) => {
  return (
    <div className={style.item} onClick={onClick}>
      <p>{name}</p>
      <button className={style.close_btn} onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  )
}

type RecentSearchProps = {
  onItemSelect: (value: string) => void
}
export default function RecentSearch({ onItemSelect }: RecentSearchProps) {
  const recentSearchList = useRecoilValue(recentSearchState);
  const deleteRecentKeyword = useDeleteRecentSearchState();

  const handleClick = (keyword: string) => {
    onItemSelect(keyword);
  }

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>, keyword: string) => {
    e.stopPropagation();
    deleteRecentKeyword(keyword);
  };

  return (
    <div className={style.container}>
      <div className={style.recent_box}>
        {!isEmpty(recentSearchList) &&
          <div className={style.recent_list}>
            {recentSearchList.map((v, i) => (
              <RecentItem
                key={i}
                name={v.keyword}
                onClick={() => handleClick(v.keyword)}
                onClose={(e) => handleClose(e, v.keyword)}
              />
            ))}
          </div>
        }
      </div>
    </div>
  )
}