"use client"

import style from './TopicList.module.css';
import ScrapIcon from "@/assets/Icons";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from "recoil";
import React, { Fragment, useState } from "react";

import { Topic } from "@/model/Topic";
import { Category } from "@/model/Category";
import { useToast } from "@/components/Toast/useToast";
import { useScrap } from '@/states/server/mutations';
import { ScrapToast } from "@/components/Toast/ScrapToast";
import { queryKeys, useTopicList } from "@/states/server/queries";
import { activeCategory } from "@/states/client/atoms/activeCategory";
import { AnimatePresence } from "framer-motion";
import { activeLoginModal } from "@/states/client/atoms/activeLoginModal";
import ToastPortal from "@/components/Toast/ToastPortal";
import { useQueryClient } from '@tanstack/react-query';
import { userState } from '@/states/client/atoms/user';
import { useIsLoginCsr } from '@/utils/auth_client';
import { LinkButton } from '../../../components/LinkButton/LinkButton';

type TopicItemProps = {
  data: Topic; 
}

export function TopicItem({data}: TopicItemProps) {
  const [active, setActive] = useState(data.scrapped);
  const [, setActiveLogin] = useRecoilState(activeLoginModal);
  const [activeCategoryItem] = useRecoilState(activeCategory);
  const { showToast } = useToast();
  const isLogin = useIsLoginCsr();

  const queryClient = useQueryClient();
  const scrapMutation = useScrap({
    onSuccess: () => {
      if (!active) {
        setActive(true);
        showToast({content: <ScrapToast />, duration: 3000});
      } else {
        setActive(false);
      }
      queryClient.invalidateQueries({queryKey: queryKeys.topicList(activeCategoryItem.categoryId)});
      queryClient.invalidateQueries({ queryKey: queryKeys.topicInfo(data.topicId)});
      queryClient.invalidateQueries({queryKey: queryKeys.myScrap("topic")});
    },
    onError: () => {
      showToast({content: "잠시후 다시 시도해주세요!", type: "warning"});
    }
  });

  const handleScrapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLogin) {
      scrapMutation.mutate({id: data.topicId, type: 1});
    } else {
      setActiveLogin(true);
    }
  }

  return (
    <LinkButton href={`/${activeCategoryItem.categoryId}/${data.topicId}`}>
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
    </LinkButton>
  )
}

type Props = {
  activeItem : Category;
}
export default function TopicList({activeItem}:Props) {
  const { data:topicList } = useTopicList(activeItem.categoryId);

  return (
    <Fragment>
      <div className={style.topic_list}>
        {topicList && topicList.map(item => (
          <TopicItem 
            key={`${item.categoryName}_${item.topicId}_${item.scrapped}`}
            data={item}
          />
        ))}
      </div>
    </Fragment>
  )
}