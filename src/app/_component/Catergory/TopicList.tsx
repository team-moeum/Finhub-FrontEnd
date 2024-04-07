"use client"

import style from "@/app/_component/Catergory/TopicList.module.css";
import ScrapIcon from "@/assets/Icons";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import ToastPortal from "@/components/Toast/ToastPortal";
import React, { Fragment, useState } from "react";
import { useRecoilState } from "recoil";

import { Topic } from "@/model/Topic";
import { Category } from "@/model/Category";
import { useToast } from "@/components/Toast/useToast";
import { ScrapToast } from "@/components/Toast/ScrapToast";
import { useCategory, useTopicList } from "@/states/server/queries";
import { activeCategory } from "@/states/client/atoms/activeCategory";
import { AnimatePresence } from "framer-motion";
import { activeLoginModal } from "@/states/client/atoms/activeLoginModal";

type TopicItemProps = {
  data: Topic; 
  showToast?: () => void;
}

export function TopicItem({data, showToast}: TopicItemProps) {
    const [active, setActive] = useState(data.scrapped);
    const [, setActiveLogin] = useRecoilState(activeLoginModal);
    const [activeCategoryItem] = useRecoilState(activeCategory);
    // const scrapMutation = useScrap()

    const handleScrapClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveLogin(true);
        if (!active) {
          setActive(true);
          if (showToast) showToast();
        } else {
          setActive(false);
        }
    }

    return (
      <Link href={`/${activeCategoryItem.categoryId}/${data.topicId}`}>
          <div className={style.item_container}>
              <div className={style.img_box}></div>
              <div className={style.content_box}>
                  <p>{data.title}</p>
                  <p>{data.summary}</p>
              </div>
              <div className={style.icon_box} onClick={handleScrapClick}>
                  <ScrapIcon active={active} />
              </div>
          </div>
      </Link>
    )
}

type Props = {
  activeItem : Category;
}
export default function TopicList({activeItem}:Props) {
    const { data:topicList } = useTopicList(activeItem.categoryId);
    const {isToastVisible, showToast} = useToast();
    const router = useRouter();

    return (
        <Fragment>
            <div className={style.topic_list}>
                {topicList.map(item => (
                    <TopicItem 
                        key={`${item.categoryName}_${item.topicId}`}
                        data={item}
                        showToast={() => showToast(4000)}
                    />
                ))}
            </div>
            <AnimatePresence>
              {isToastVisible && 
                <ToastPortal>
                  <ScrapToast 
                    onClick={() => router.push('/menu/scrap')}
                  />
                </ToastPortal>
              }  
            </AnimatePresence>
        </Fragment>
    )
}