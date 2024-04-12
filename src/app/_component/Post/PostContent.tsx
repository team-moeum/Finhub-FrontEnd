"use client";

import { useState } from "react";
import style from "./PostContent.module.css";
import cx from "classnames"
import UserTypeContent from "./UserTypeContent";

type ContentTypes = "custom" | "original";

type Props = {
    definition: string
}
export default function PostContent({definition}: Props) {
    const [content, setContent] = useState<ContentTypes>("custom");

    const handleTagClick = () => {
        setContent(content === "custom" ? "original" : "custom");
    }
    return (
        <div className={style.container}>
            <div className={style.tag_box} onClick={handleTagClick}>
                <div className={cx([style.tag, style.custom_desc_tag, content === "custom" && style.on])}>맞춤형 설명</div>
                <div className={cx([style.tag, style.original_desc_tag, content === "original" && style.on])}>원본</div>
            </div>
            <div className={style.content}>
                {content === "custom" ? 
                    <>
                        <UserTypeContent />
                    </>
                    :
                    <>
                        <div className={style.content_text}>
                            {definition}
                        </div>
                    </>
                } 
            </div>
        </div>
    )
}