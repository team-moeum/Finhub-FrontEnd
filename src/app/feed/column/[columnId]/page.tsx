"use client";

import Image from "next/image"
import style from "../[columnId]/ColumnPost.module.css"
import CommentCard from "../_component/CommentCard"
import LinkButton from "@/app/_component/UiComponent/LinkButton"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation";
import { useGptColumnDetail } from "@/states/server/queries";
import { useGptColumnLike } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";

import ScrapIcon from '@/public/column/star_icon.png';
import ScrapIconOn from '@/public/column/green_star_Icon.png';
import LikeIcon from '@/public/column/thumb_icon_green.png';
import LikeIconOn from '@/public/column/thumb_icon_green_full.png';
import LikeIconGray from '@/public/column/thumb_icon.png';

export default function ColumnPost() {
    const router = useRouter();
    const columnId = Number(useParams().columnId);

    const { showToast } = useToast();

    const [starImgSrc, setStarImgSrc] = useState('/column/star_icon.png');
    const [thumbImgSrc, setThumbImgSrc] = useState('/column/thumb_icon_green.png');
    const [curImg, setCurImg] = useState(false);
    const [whichTab, setWhichTab] = useState("popular");
    const [showInput, setShowInput] = useState(false);

    const [isLiked, setIsLiked] = useState(false);
    const [isScrapped, setIsScrapped] = useState(false);

    const { data: gptColumnDetail } = useGptColumnDetail(columnId);
    console.log(gptColumnDetail);

    const useGptColumnLikeMutation = useGptColumnLike({
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (data) => {
            console.log(data);
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 100) {
                setShowInput(true);
            } else {
                setShowInput(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const onClickStar = () => {
        if (curImg) {
            setStarImgSrc('/column/star_icon.png');
            setThumbImgSrc('/column/thumb_icon_green.png')
            setCurImg(false);
        } else {
            setStarImgSrc('/column/green_star_icon.png');
            setThumbImgSrc('/column/thumb_icon_green_full.png');
            setCurImg(true);
        }
    }

    const onClickThumb = () => {
        if (curImg) {
            setThumbImgSrc('/column/thumb_icon_green.png')
            setCurImg(false);
        } else {
            setThumbImgSrc('/column/thumb_icon_green_full.png');
            setCurImg(true);
        }
    }

    const onClickPopular = () => {
        setWhichTab("popular");
    }

    const onClickNewest = () => {
        setWhichTab("newest");
    }

    const onClickInput = () => {
        router.push('/feed/column/[columnId]/comment_detail/write_comment');
    }

    return (
        <div className={style.container}>
            <div className={style.image_container}>
                <Image
                    className={style.background_image}
                    src={gptColumnDetail.backgroundImgUrl}
                    alt="column post image"
                    fill
                />
                <div className={style.overlay_image}></div>
                <button className={style.overlay_back_button} onClick={() => router.back()}>
                    <Image
                        src='/column/back_icon.png'
                        alt="back button"
                        width={10}
                        height={19}
                    />
                </button>
                <button className={style.overlay_share_button}>
                    <Image
                        src='/column/share_icon2.png'
                        alt="share button"
                        width={20}
                        height={19}
                    />
                </button>
                <button className={style.overlay_scrap_button} onClick={onClickStar}>
                    <Image
                        src={ScrapIcon}
                        alt="scrap icon"
                        width={20}
                        height={19}
                    />
                </button>
            </div>
            <div className={style.content_container}>
                <div className={style.content_tag}>
                    {gptColumnDetail.topicList.map((topic) => (
                        <button className={style.tag_button} key={topic.id}># {topic.title}</button>
                    ))}
                </div>
                <p className={style.content_date}>{gptColumnDetail.date}</p>
                <p className={style.content_title}>{gptColumnDetail.title}</p>
                <div className={style.content_summary}>{gptColumnDetail.summary}</div>
                <div className={style.content_body}>{gptColumnDetail.content}</div>
                <div className={style.thumb_box}>
                    <p style={{ fontWeight: 600 }}>칼럼이 도움이 되었나요?</p>
                    <div className={style.thumb_buttons}>
                        <button className={style.thumb_helpfulBtn} onClick={onClickThumb}>
                            <Image
                                src={thumbImgSrc}
                                alt="Thumb Icon"
                                width={14}
                                height={14}
                            />
                            <p className={style.thumb_text}>도움이 됐어요</p>
                        </button>
                        <button className={style.thumb_shareBtn}>공유하기</button>
                    </div>
                    <div className={style.view_thumb}>
                        <Image
                            src="/column/thumb_icon.png"
                            alt="Thumb Icon"
                            width={14}
                            height={14}
                        />
                        <p className={style.view_thumb_text}>{gptColumnDetail.totalLike}명이 도움을 받았어요!</p>
                    </div>
                </div>
            </div>
            <div className={style.divider} />
            <div className={style.comment_container}>
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
                        <button className={whichTab === "newest" ? style.active : ''} onClick={onClickNewest}>최신순</button>
                    </div>
                </div>
                <div className={style.comment_body}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <LinkButton href={'/feed/column/column_post_test/comment_detail'}>
                        <div className={style.detail_button}>더보기</div>
                    </LinkButton>
                </div>
            </div>
            {showInput && (
                <div className={style.comment_input}>
                    <Image
                        src="/column/user_img.png"
                        alt="User Image"
                        width={48}
                        height={48}
                    />
                    <input
                        className={style.input_container}
                        type="text"
                        placeholder="의견 나누기"
                        onClick={onClickInput}
                    />
                </div>
            )}

        </div>
    )
}