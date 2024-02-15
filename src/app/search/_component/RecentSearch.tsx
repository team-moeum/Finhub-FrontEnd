"use client";

import { useState } from "react";
import style from "./RecentSearch.module.css";

type RecentItemProps = {
    name: string;
    onClose: () => void;
}

const RecentItem = ({name, onClose} : RecentItemProps) => {
    return (
        <div className={style.item}>
            <p>{name}</p>
            <button className={style.close_btn} onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08736 3.08736C3.31516 2.85955 3.68451 2.85955 3.91232 3.08736L6.99984 6.17488L10.0874 3.08736C10.3152 2.85955 10.6845 2.85955 10.9123 3.08736C11.1401 3.31516 11.1401 3.68451 10.9123 3.91232L7.82479 6.99984L10.9123 10.0874C11.1401 10.3152 11.1401 10.6845 10.9123 10.9123C10.6845 11.1401 10.3152 11.1401 10.0874 10.9123L6.99984 7.8248L3.91232 10.9123C3.68451 11.1401 3.31516 11.1401 3.08736 10.9123C2.85955 10.6845 2.85955 10.3152 3.08736 10.0874L6.17488 6.99984L3.08736 3.91232C2.85955 3.68451 2.85955 3.31516 3.08736 3.08736Z" fill="#9C9A99"/>
                </svg>
            </button>
        </div>
    )
}

export default function RecentSearch({data} : {data: Array<{name: string}>}) {
    const [list, setList] = useState(data);
    const [isEmpty, setIsEmpty] = useState(false);

    const handleDeleteAll = () => {
        setIsEmpty(true);
    }

    const handleClose = (index: number) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };

    return (
        <div className={style.container}>
            <div className={style.recent_header}>
                <div className={style.recent_title}>최근 검색어</div>
                <button className={style.delete_all_button} onClick={handleDeleteAll}>전체삭제</button>
            </div>
            <div className={style.recent_box}>
                {isEmpty ? <div className={style.empty_box}>검색 내역이 없습니다.</div>
                    :
                    <div className={style.recent_list}>
                        {list.map((v, i) => (
                            <RecentItem key={i} name={v.name} onClose={() => handleClose(i)}/>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}