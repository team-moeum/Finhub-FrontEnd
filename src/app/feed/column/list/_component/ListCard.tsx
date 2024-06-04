"use client";
import Link from "next/link";
import "../../_component/ColumnCardImg.css";
import { useGptColumnList } from "@/states/server/queries";
import ColumnCardImg from "../../_component/ColumnCardImg";
import { gptColumn } from "@/model/GptColumn";

export default function ListCard() {
    const { 
        data,
        fetchNextPage,
        hasNextPage,
        isFetching
    } = useGptColumnList({ page: 1, size: 5 });
    const gptColumnList = data?.pages[0].columnInfo as gptColumn[];
    
    return (
        <>
            {gptColumnList && gptColumnList.map((item) => {
                return (
                    <>
                        <Link href={`/feed/column/${item.id}`}>
                            <ColumnCardImg item={item} />
                        </Link>
                        <div style={{height: 15}}></div>
                    </>
                )
            })}
        </>
    )
}