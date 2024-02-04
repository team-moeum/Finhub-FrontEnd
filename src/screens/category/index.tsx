"use client";

import * as S from "./Categiry.style";
import LinkButton from "@/components/Button/LinkButton";
import React, { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";

type paramsType = {
    category: string;
}

type itemTypes = {
  id: number;
  title: string;
};

type categoryTitleTypes = {
  [key: string]: string;
};

const SkeletonCard = () => {
  return (
    <S.skeletonContainer>
      <Skeleton height="45px" variant="circular" width="45px" />
      <Skeleton
        height="25px"
        variant="round"
        width="300px"
        radius={10}
        style={{ flex: 1 }}
      />
    </S.skeletonContainer>
  );
};

export default function Category({params} : {params: paramsType}) {
  const [data, setData] = useState<itemTypes[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryTitle: categoryTitleTypes = {
    stock: "주식",
    etf: "etf",
    fund: "펀드",
    irp: "irp",
  };

  useEffect(() => {
    async function fetchData() {
      const respons = await fetch(`/api/${params.category}`);
      const result = await respons.json();

      setLoading(false);
      setData(result);
    }
    fetchData();
  }, [params]);

  return (
    <S.container>
      <S.title>{categoryTitle[params.category]}</S.title>
      <S.list>
        {loading
          ? new Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : data &&
            data.map((item) => (
              <LinkButton
                key={item.id}
                href={`/${params.category}/${item.id}`}
                background="#eee"
                ripple
                animate
              >
                <S.itemCard>{item.title}</S.itemCard>
              </LinkButton>
            ))}
      </S.list>
    </S.container>
  );
}