"use client";
import Link from "next/link";
import Image from "next/image"
import style from "./ListCard.module.css"

export default function ListCard() {
    return (
        <>
            <Link href="/">
                <div className={style.card_img}>
                    <Image 
                        src="/column/column_banner.png"
                        alt="Column Card"
                        fill
                    />
                </div>
            </Link>
        </>
    )
}