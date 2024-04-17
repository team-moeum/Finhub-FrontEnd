"use client";

import Image from "next/image"
import style from "../[columnId]/ColumnPost.module.css"
import CommentCard from "../_component/CommentCard"
import LinkButton from "@/app/_component/UiComponent/LinkButton"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function ColumnPost() {  
    const router = useRouter();
    const [starImgSrc, setStarImgSrc] = useState('/column/star_icon.png');
    const [thumbImgSrc, setThumbImgSrc] = useState('/column/thumb_icon_green.png');
    const [curImg, setCurImg] = useState(false);

    const [whichTab, setWhichTab] = useState("popular");

    const [showInput, setShowInput] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 500) {
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
        router.push('/feed/column/column_post_test/comment_detail/write_comment');
    }

    return (
        <div className={style.container}>
            <div className={style.image_box}>
                <Image
                    src="/column/col_img.png"
                    alt="column Img" 
                    width={360} 
                    height={215} 
                />
                <Image 
                    src="/column/shadow_img.png"
                    alt="Shadow Card"
                    fill
                />
                <button className={style.overlay_back_button} onClick={() => router.back()}>
                    <Image 
                        src='/column/back_icon.png'
                        alt="back button"
                        width={8}
                        height={14}
                    />
                </button>
                <button className={style.overlay_share_button}>
                    <Image 
                        src='/column/share_icon.png'
                        alt="share button"
                        width={16}
                        height={16}
                    />
                </button>
                <button className={style.overlay_star_button} onClick={onClickStar}>
                    <Image 
                        src={starImgSrc}
                        alt="like button"
                        width={18}
                        height={18}
                    />
                </button>
            </div>
            <div className={style.content_box}>
                <div className={style.content_tag}>
                    <button className={style.tag_button}># 주식</button>
                    <button className={style.tag_button}># 주식</button>
                </div>
                <p className={style.content_date}>2024.03.11</p>
                <p className={style.content_title}>초보자도 주식할 수 있다! 
                    <br />
                    주식 기본 꿀팁
                </p>
                <div className={style.content_summary}>
                    요약글입니다 요약글입니다 요약글입니다 요약글입니다 요약글입니다
                </div>
                <div className={style.content_body}>본문 내용입니다 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis nisl, commodo a imperdiet id, posuere vel diam. Mauris blandit vitae urna vel imperdiet. Duis leo diam, imperdiet sit amet augue quis, lacinia pellentesque neque. Etiam dignissim mi in erat lacinia hendrerit. Morbi aliquet ligula vestibulum efficitur consequat. Quisque et suscipit magna. Sed at ante nec est sollicitudin sollicitudin. Aenean justo orci, dignissim non efficitur sed, rhoncus in diam. Phasellus lacinia ullamcorper leo, et molestie tellus gravida a. Sed quis elit vitae libero venenatis rhoncus. Curabitur pulvinar at nulla id commodo.</div>
            </div>
            <div className={style.thumb_box}>
                <p style={{fontWeight: 600}}>칼럼이 도움이 되었나요?</p>
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
                    <p className={style.view_thumb_text}>53명이 도움을 받았어요!</p>
                </div>
            </div>
            <div className={style.divider} />
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
                        className={style.input_box} 
                        type="text" 
                        placeholder="의견 나누기"
                        onClick={onClickInput}
                    />
                </div>
            )}
        </div>
    ) 
}