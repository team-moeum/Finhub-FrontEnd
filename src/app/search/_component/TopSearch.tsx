"use client";

import style from "./TopSearch.module.css";

const mockList = [
    {name: "최대 단어 길이는 몇으로"},
    {name: "최소"},
    {name: "IRP"},
    {name: "펀드"},
    {name: "연말정산"},
    {name: "차트 마스터"},
]

type RecentItemProps = {
    name: string;
    onClick: () => void;
}

const TopSearchItem = ({name, onClick} : RecentItemProps) => {
    return (
        <button className={style.item} onClick={onClick}>
            <p>{name}</p>
        </button>
    )
}

type TopSearchProps = {
    onItemSelect: (value: string) => void;
}

export default function TopSearch({onItemSelect} : TopSearchProps) {
    return (
        <div className={style.container}>
            <div className={style.title}>인기 검색어</div>
            <div className={style.top_search_box}>
                {mockList.map((v, i) => (
                    <TopSearchItem key={i} name={v.name} onClick={() => onItemSelect(v.name)}/>
                ))}
            </div>
        </div>
    )
}