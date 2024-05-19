"use client";

import style from "./PostScreen.module.css";

import Image from "next/image";
import PostImg from "@/public/post_image.png";
import PostContent from "./PostContent";
import { useTopicInfo } from "@/states/server/queries";
import PostNav from "../Nav/PostNav";
import { jsToNative } from "@/utils/jsToNative";

type Props = { categoryId: number; topicId: number };
export default function PostScreen({ categoryId, topicId }: Props) {
  const {
    data: { title, summary, definition, img_path, scrapped },
  } = useTopicInfo(topicId);

  /** To-do */
  const handleScrapClick = () => {
    console.log("handleScrapClick :", scrapped);
  };

  const handleShareClick = () => {
    jsToNative(
      { val1: "share", val2: window.location.href },
      (data: any) => {}
    );
  };

  return (
    <>
      <PostNav
        scrap={scrapped}
        topicId={topicId}
        onClick={handleScrapClick}
        onShare={handleShareClick}
      />
      <div className={style.image_box}>
        <Image src={PostImg} alt="post Img" width={195} height={195} />
      </div>
      <div className={style.container}>
        <p className={style.title}>{title}</p>
        <div className={style.summary}>
          <div className={style.tag}>요약</div>
          <div className={style.content}>{summary}</div>
        </div>
        <div className={style.divider}></div>
        <PostContent
          categoryId={categoryId}
          topicId={topicId}
          definition={definition}
        />
        <div className={style.next_page_box}>
          <div className={style.next_img_box}>
            <Image
              src={PostImg}
              alt="next image"
              width={100}
              height={88}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={style.text_box}>
            <p>다음글 보기</p>
            <p>주식이란?</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="12"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1.12494 13L6.81396 7L1.12494 1"
              stroke="#332222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
