import Image from "next/image";
import "./ColumnCardImg.css";
import { gptColumn } from "@/model/GptColumn";

type ColumnCardImgProps = {
    item: gptColumn,
}

export default function ColumnCardImg({item}: ColumnCardImgProps) {
    return (
        <>
            <div className="slide_img">
                <div className="overlay_text">
                    <p className="overlay_title">{item.title}</p>
                    <p className="overlay_date">{item.date}</p>
                </div>
                <div className="overlay_tag">
                    {item.topicList.map((topic) => (
                        <span key={topic.id}>#{topic.title} </span>    
                    ))}
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