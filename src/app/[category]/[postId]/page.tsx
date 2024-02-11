import { Metadata } from "next";
import Image from "next/image";
import style from "./PostId.module.css";
import PostImg from "../../../../public/post_image.png";
import PostContent from "@/app/_component/Post/PostContent";

export const metadata: Metadata = {
    title: "Post",
};

export default function PostPage({params}: {params: { category: string; postId: string }}) {
    return (
        <>
            <div className={style.image_box}>
                <Image
                    src={PostImg} 
                    alt="post Img" 
                    width={195} 
                    height={195} 
                />
            </div>
            <div className={style.container}>
                <p className={style.title}>주식이란?</p>
                <div className={style.summary}>
                    <div className={style.tag}>요약</div>
                    <div className={style.content}>주식회사의 자본을 이루는 단위로서의 금액 및 이를 전제로 한 주주의 권리·의무(주주권).</div>
                </div>
                <div className={style.divider}></div>
                <PostContent />
                <div className={style.next_page_box}>
                    
                </div>
            </div>
        </>
    )
}