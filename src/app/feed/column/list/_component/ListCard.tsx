"use client";
import Link from "next/link";
import "../../_component/ColumnCardImg.css";
import { useGptColumnList } from "@/states/server/queries";
import ColumnCardImg from "../../_component/ColumnCardImg";
import { gptColumn } from "@/model/GptColumn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Box } from "@/components/Box";
import { useEffect, useMemo } from "react";
import { Stack } from "@/components/Stack";

export default function ListCard() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useGptColumnList({ page: 1, size: 10 });

  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const gptColumnList = useMemo(() => {
    return data?.pages.flatMap(page => page?.columnInfo) as gptColumn[];
  }, [data]);

  useEffect(() => {
    if (hasNextPage && isIntersecting) fetchNextPage();
  }, [hasNextPage, isIntersecting])

  return (
    <>
      <Stack gap={15}>
        {gptColumnList && gptColumnList.map((item) => {
          return (
            <Link key={item.id} href={`/feed/column/${item.id}`}>
              <ColumnCardImg item={item} />
            </Link>
          )
        })}
      </Stack>
      <Box ref={ref} height={20}/>
    </>
  )
}