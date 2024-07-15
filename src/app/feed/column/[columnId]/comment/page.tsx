"use client";

import Image from "next/image"
import { useParams, useRouter } from "next/navigation";
import style from "./CommentDetail.module.css";
import { useState } from "react";
import { AppContainer, Container } from "@/components/Container";
import { AppBar } from "@/components/AppBar";
import { useGptColumnDetail, useUserInfo } from "@/states/server/queries";
import { FlexBox } from "@/components/FlexBox";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Stack } from "@/components/Stack";
import { Box } from "@/components/Box";
import { ColumnComment } from "../../_component/ColumnComment";
import { OpinionBox } from "../_component/OpinionBox";


export default function CommentDetail() {
  const columnId = Number(useParams().columnId);

  const { data: gptColumnDetail } = useGptColumnDetail(columnId);
  const { data: userInfo } = useUserInfo();

  return (
    <AppContainer>
      <AppBar
        useLeftBack
      />

      <Container pt={32} pb={26}>
        <FlexBox justifyContent='flex-start' flexWrap='wrap' gap={12}>
          {gptColumnDetail.topicList.map((topic) => (
            <Button
              key={topic.id}
              padding={10}
              radius={10}
              backgroundColor="#F3F3F3"
            >
              <Text size={12} weight={600} color="#7B8287"># {topic.title}</Text>
            </Button>
          ))}
        </FlexBox>

        <Stack mt={20} gap={10}>
          <Text size={12} weight={400} color="#25292C">{gptColumnDetail.date}</Text>
          <Text size={24} weight={700} color="#191B1C">{gptColumnDetail.title}</Text>
        </Stack>
      </Container>

      <Box width='100%' height={10} backgroundColor="#EDF0F3" />

      <Box mt={20} mb={100}>
        <ColumnComment columnId={columnId} pageType='commentDetatil' />
      </Box>

      <OpinionBox columnId={columnId} imgSrc={userInfo?.avatarUrl}/>

    </AppContainer>
  )
}