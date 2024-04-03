import Image from "next/image";
import style from "./ColumnCardImg.module.css";

export default function ColumnCardImg() {
    return (
        <>
            <div className={style.slide_img}>
                <div className={style.card_text}>
                    <p>초보자도 주식할 수 있다!</p>
                    <p>주식 기본 꿀팁</p>
                    <p>2024. 03. 11.</p>
                </div>
                <Image 
                    src="/column/col_img.png"
                    alt="Column Card"
                    fill
                    className={style.img_main}
                />
                <Image 
                    src="/column/shadow_img.png"
                    alt="Shadow Card"
                    fill
                    className={style.img_shadow}
                />
            </div>
        </>
    )
}