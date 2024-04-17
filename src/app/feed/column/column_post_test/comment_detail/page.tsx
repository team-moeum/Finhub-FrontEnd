"use client";

import Image from "next/image"
import CommentCard from "../../_component/CommentCard"
import { useRouter } from "next/navigation";
import style from "./CommentDetail.module.css";
import { useState } from "react";

export default function CommentDetail() {
    const router = useRouter();
    const [whichTab, setWhichTab] = useState("popular");

    const onClickPopular = () => {
        setWhichTab("popular");
    }

    const onClickNewest = () => {
        setWhichTab("newest");
    }

    return (
        <>
            <div className={style.comment_detail_header}>
                <button onClick={() => router.back()}>
                    <Image 
                        src='/column/back_icon_gray.png'
                        alt="back button"
                        width={8}
                        height={14}
                    />
                </button>
                <div className={style.content_tag}>
                    <button className={style.tag_button}># 주식</button>
                    <button className={style.tag_button}># 주식</button>
                </div>
                <p className={style.content_date}>2024.03.11</p>
                <p className={style.content_title}>초보자도 주식할 수 있다! 
                    <br />
                    주식 기본 꿀팁
                </p>
            </div>
            <div className={style.divider}></div>
            <div className={style.comment_box}>
                <div className={style.comment_header}>
                    <div className={style.comment_title}>
                        <p className={style.comment_title_text}>의견 나누기</p>
                        <button onClick={() => router.refresh()}>
                            <Image
                                src="/column/comment_refresh_icon.png"
                                alt="Refresh Icon" 
                                width={14} 
                                height={14} 
                            />
                        </button>
                    </div>
                    <div className={style.comment_order}>
                        <button className={whichTab === "popular" ? style.active : ''} onClick={onClickPopular}>인기순</button>
                        <button className={whichTab === "newest" ? style.active : ''}onClick={onClickNewest}>최신순</button>
                    </div>
                </div>
                <div className={style.comment_body}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
            </div>
            <div className={style.comment_input}>
                    <Image
                        src="/column/user_img.png"
                        alt="User Image" 
                        width={48} 
                        height={48} 
                    />
                    <input className={style.input_box} type="text" placeholder="의견 나누기"/>
            </div>
        </>
    )
}