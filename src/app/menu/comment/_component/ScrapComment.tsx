"use client";

import { Suspense } from "react";
import style from "src/app/menu/scrap/_component/ScrapContent.module.css";

import Loading from "@/app/loading";

import { CommentCard } from "./CommentCard";

import { useMyComment } from "@/states/server/queries";

import { MyCommentProp } from "@/model/MyComment";

const ScrapCommentList = () => {
  const { data: myComment } = useMyComment();
  const CommentList = myComment?.mycomment || [];
  const { refetch } = useMyComment();
  const handleRefreshClick = () => refetch();

  return (
    <div className={style.topic_list}>
      {CommentList.map((item: MyCommentProp) => (
        <CommentCard
          key={item.commentId}
          commentId={item.commentId}
          columnId={item.columnId}
          isMine={true}
          title={item.title}
          comment={item.comment}
          like={item.totalLike}
          date={item.date}
          refetch={handleRefreshClick}
        />
      ))}
    </div>
  );
};

export default function ScrapComment() {
  return (
    <div className={style.container}>
      <Suspense fallback={<Loading height={300} />}>
        <ScrapCommentList />
      </Suspense>
    </div>
  );
}
