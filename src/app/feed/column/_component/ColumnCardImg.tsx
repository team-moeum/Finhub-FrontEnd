import Image from "next/image";
import "./ColumnCardImg.css";

export default function ColumnCardImg() {
    return (
        <>
            <div className="slide_img">
                <div className="overlay_text">
                    <p className="overlay_title">초보자도 주식할 수 있다!</p>
                    <p className="overlay_title">주식 기본 꿀팁</p>
                    <p className="overlay_date">2024. 03. 11.</p>
                </div>
                <div className="overlay_tag">
                    <span>#주식 </span>
                    <span>#ETF </span>
                </div>
                <Image 
                    src="/column/col_img.png"
                    alt="Column Card"
                    fill
                    className="img_main"
                />
                <Image 
                    src="/column/shadow_img.png"
                    alt="Shadow Card"
                    fill
                    className="img_shadow"
                />
            </div>
        </>
    )
}