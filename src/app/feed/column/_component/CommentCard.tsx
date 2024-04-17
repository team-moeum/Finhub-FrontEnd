"use client";

import style from "./CommentCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function CommentCard() {
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
                                src="/column/user_img.png"
                                alt="user Img" 
                                width={48} 
                                height={48} 
                            />
                            <div className={style.comment_user_text}>
                                <p className={style.user_nickname}>주식초보</p>
                                <p className={style.user_date}>2024.03.01</p>
                            </div>
                        </div>
                        <div className={style.comment_content}>
                        칼럼 내용이 정말 도움이 많이 되네요. 저는 주식 완전 초보인데 덕분에 주식 좀 열심히 해보려구요~^^
                        </div>
                        <div className={style.comment_thumb}>
                            <p>받은 추천:</p>
                            <div className={curImg ? style.thumb_active : ""}>
                                <p>99개</p>
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