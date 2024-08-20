"use client";

import cx from "classnames";
import { useRouter } from "next/navigation";
import { Fragment, Suspense, useEffect, useRef, useState } from "react";
import React from "react";

import Loading from "@/app/loading";

import style from "./ListContent.module.css";

import { useCategory, useTotalList } from "@/states/server/queries";

import { Category } from "@/model/Category";

import { scrollToElementCenterVertical } from "@/utils/scroll";

type CatetegoryBarProps = {
  data: Category[] | undefined;
  activeId: number;
  onClick: (id: number) => void;
};

const CatetegoryListBar = ({ data, activeId, onClick }: CatetegoryBarProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = itemRefs.current[activeId];
    const scrollAreaEl = el?.parentNode?.parentElement;
    if (el && scrollAreaEl) scrollToElementCenterVertical(scrollAreaEl, el);
  }, [activeId]);

  return (
    <Fragment>
      {data?.map(item => {
        return (
          <div
            key={item.categoryId}
            className={cx([style.list_item, item.categoryId === activeId && style.active_item])}
            onClick={() => onClick(item.categoryId)}
            ref={el => (itemRefs.current[item.categoryId] = el)}
          >
            {item.name}
          </div>
        );
      })}
    </Fragment>
  );
};

type TopicBarProps = {
  categoryId: number;
  onClick: (id: number) => void;
};

const TopicListBar = ({ categoryId, onClick }: TopicBarProps) => {
  const { data: topicList } = useTotalList(categoryId);
  return (
    <Fragment>
      {topicList?.map(item => {
        return (
          <div
            key={`topic_${item.topicId}`}
            className={style.list_item}
            onClick={() => onClick(item.topicId)}
          >
            {item.title}
          </div>
        );
      })}
    </Fragment>
  );
};

type ListContentProps = {
  categoryId: number;
};
export default function ListContent({ categoryId }: ListContentProps) {
  const [activeId, setActiveId] = useState<number>(categoryId ?? 1);
  const { data: categoryList } = useCategory();
  const router = useRouter();

  const handleClickCategoryItem = (id: number) => {
    setActiveId(id);
  };

  const handleClickTopicItem = (id: number) => {
    router.push(`/${activeId}/${id}`);
  };

  return (
    <div className={style.container}>
      <div className={style.left_scroll_area}>
        <div className={style.left_content}>
          <CatetegoryListBar
            data={categoryList}
            activeId={activeId}
            onClick={handleClickCategoryItem}
          />
        </div>
      </div>
      <div className={style.right_scroll_area}>
        <Suspense fallback={<Loading height="100%" />}>
          <div className={style.right_content}>
            <TopicListBar categoryId={activeId} onClick={handleClickTopicItem} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
