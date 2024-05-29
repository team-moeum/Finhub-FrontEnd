"use client";

import { useGptColumnComment } from "@/states/server/queries";
import style from "./CommentCard.module.css";
import Image from "next/image";
import { useState } from "react";
import { gptColumnComment } from "@/model/GptColumn";

export default function CommentCard() {
    const { data: gptColumnComment } = useGptColumnComment(columnId, commentType);

    const [thumbImgSrc, setThumbImgSrc] = useState('/column/thumb_icon.png');
    const [curImg, setCurImg] = useState(false);

    const onClickThumb = () => {
        if (curImg) {
            setThumbImgSrc('/column/thumb_icon.png')
            setCurImg(false);
        } else {
            setThumbImgSrc('/column/thumb_icon_green_full.png');
            setCurImg(true);
        }
    }

    return (
        <>
            <div className={style.comment_card}>
                <div className={style.comment_user}>
                    <Image
                        src={gptColumnComment.avatarImgPath}
                        alt="user Img"
                        width={48}
                        height={48}
                    />
                    <div className={style.comment_user_text}>
                        <p className={style.user_nickname}>{gptColumnComment.nickname}</p>
                        <p className={style.user_date}>{gptColumnComment.date}</p>
                    </div>
                </div>
                <div className={style.comment_content}>
                    {gptColumnComment.comment}
                </div>
                <div className={style.comment_thumb}>
                    <p>받은 추천:</p>
                    <div className={curImg ? style.thumb_active : ""}>
                        <p>{gptColumnComment.like}개</p>
                        <button onClick={onClickThumb}>
                            <Image
                                src={thumbImgSrc}
                                alt="Thumb Icon"
                                width={12}
                                height={12}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}