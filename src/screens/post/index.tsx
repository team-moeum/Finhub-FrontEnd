"use client";

import * as S from "./Post.style";
import { useEffect, useState } from "react";

type paramsType = {
    category: string;
    postId: string;
}

type dataTypes = {
  id: number;
  title: string;
  definition: string;
  summary: string;
  content: string;
};

export default function Post({params}: {params: paramsType}) {
  const [data, setData] = useState<dataTypes | null>(null);

  useEffect(() => {
    async function fetchData() {
      const respons = await fetch(`/api/${params.category}/${params.postId}`);
      const result = await respons.json();

      setData(result);
    }
    fetchData();
  }, [params]);

  return (
    <S.container>
      <S.title>{data?.title}</S.title>
      <S.definition>{data?.definition}</S.definition>
      <S.summary>{data?.summary}</S.summary>
      <S.content>{data?.content}</S.content>
    </S.container>
  );
}
