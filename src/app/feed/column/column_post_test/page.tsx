import Image from "next/image"
import style from "../[columnId]/ColumnPost.module.css"
import CommentCard from "../_component/CommentCard"
import LinkButton from "@/app/_component/UiComponent/LinkButton"

export default function ColumnPost() {  
    return (
        <div className={style.container}>
            <div className={style.image_box}>
                <Image
                    src="/column/col_img.png"
                    alt="column Img" 
                    width={360} 
                    height={215} 
                />
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
                    <button className={style.thumb_helpfulBtn}>
                        <Image
                            src="/column/thumb_icon_green.png"
                            alt="Thumb Icon" 
                            width={14} 
                            height={14} 
                        /> 
                        <p className={style.thumb_text}>도움이 됐어요</p>
                    </button>
                    <button className={style.thumb_shareBtn}>공유하기</button>
                </div>
                <div className={style.view_thumb}>
                    {/* p 태그에 굳이 스타일 적용하지 않고 Image에 패딩값 바로 주고 싶음 */}
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
                        <Image
                            src="/column/comment_refresh_icon.png"
                            alt="Refresh Icon" 
                            width={14} 
                            height={14} 
                        />
                    </div>
                    <div>
                        <button className={style.comment_popularBtn}>인기순</button>
                        <button className={style.comment_newestBtn}>최신순</button>
                    </div>
                </div>
                <div className={style.comment_body}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <LinkButton href={'/feed/column/list'}>
                        <div className={style.detail_button}>더보기</div>
                    </LinkButton>
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
        </div>
    ) 
}