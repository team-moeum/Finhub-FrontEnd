import Image from "next/image"
import style from "./ColumnPost.module.css"

export default function ColumnPost() {  
    return (
        <>
            <div className={style.image_box}>
                <Image
                    src="/column/col_img.png"
                    alt="column Img" 
                    width={195} 
                    height={195} 
                />
            </div>
            <div className={style.content_box}>
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
                <p>칼럼이 도움이 되었나요?</p>
                <div className={style.thumb_buttons}>
                    <button className={style.thumb_helpfulBtn}>
                        <Image
                            src="/column/thumb_icon.png"
                            alt="Thumb Icon" 
                            width={14} 
                            height={14} 
                        /> 
                        <p>도움이 됐어요</p>
                    </button>
                    <button className={style.thumb_shareBtn}></button>
                </div>
                <div className={style.view_thumb}>
                    <Image
                        src="/column/thumb_icon.png"
                        alt="Thumb Icon" 
                        width={14} 
                        height={14} 
                    />
                    <p>53명이 도움을 받았어요!</p>
                </div>
            </div>
        </>
    ) 
}