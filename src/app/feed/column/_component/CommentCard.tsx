import style from "./CommentCard.module.css";
import Image from "next/image";

export default function CommentCard() {
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
                            <div className={style.thumb_num}>
                                <p>99개</p>
                                <Image
                                    src="/column/thumb_icon.png"
                                    alt="Thumb Icon" 
                                    width={12} 
                                    height={12} 
                                />
                            </div>
                        </div>
                    </div>
        </>
    )
}