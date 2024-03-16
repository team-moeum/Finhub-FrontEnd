"use client"

import style from "@/app/_component/Catergory/TopicList.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Topic } from "@/model/Topic";
import ScrapIcon from "@/assets/Icons";
import { useTopicList } from "@/states/server/queries";


type TopicItemProps = { data: Topic; }
export function TopicItem({data}: TopicItemProps) {
    const [active, setActive] = useState(data.scrap);

    const handleScrapClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive(!active);
    }

    return (
        <Link href={`/${data.category}/${data.id}`}>
            <div className={style.item_container}>
                <div className={style.img_box}></div>
                <div className={style.content_box}>
                    <p>{data.title}</p>
                    <p>{data.content}</p>
                </div>
                <div className={style.icon_box} onClick={handleScrapClick}>
                    <ScrapIcon active={active} />
                </div>
            </div>
        </Link>
    )
}

type Props = {activeItem : string}
export default function TopicList({activeItem}:Props) {
    const { data:topicList } = useTopicList(activeItem);

    return (
        <div className={style.topic_list}>
            {topicList.map(item => (
                <TopicItem 
                    key={`${item.category}_${item.id}`}
                    data={item}
                />
            ))}
        </div>
    )
}