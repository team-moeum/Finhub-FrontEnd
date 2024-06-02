"use client";

import Image from "next/image"
import style from "../ColumnPost.module.css";

import { AppBar } from "@/components/AppBar";
import { Button } from "@/components/Button";
import { AppContainer, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useGptColumnLike } from "@/states/server/mutations";
import { useGptColumnDetail, useUserInfo } from "@/states/server/queries";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ColumnComment } from "../../_component/ColumnComment";
import { OpinionBox } from "./OpinionBox";

import LikeIcon from '@/public/column/thumb_icon_green.svg';
import LikeIconOn from '@/public/column/thumb_icon_green_on.svg';
import LikeIconGray from '@/public/column/thumb_icon_gray.svg';

import ShareIcon from '@/public/icons/icon_share_white.svg';
import ScrapIcon from '@/public/icons/Icon_scrap_white.svg';
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";


export const ColumnDetailScreen = () => {
  const columnId = Number(useParams().columnId);

  const [starImgSrc, setStarImgSrc] = useState('/column/star_icon.png');
  const [thumbImgSrc, setThumbImgSrc] = useState('/column/thumb_icon_green.png');
  const [curImg, setCurImg] = useState(false);
  const [whichTab, setWhichTab] = useState("popular");
  const [showInput, setShowInput] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [isScrapped, setIsScrapped] = useState(false);

  const { data: gptColumnDetail } = useGptColumnDetail(columnId);
  const { data: userInfo } = useUserInfo();

  const { ref, isIntersecting: showOpinionBox } = useIntersectionObserver({ threshold: 0.2 });

  const gptColumnLikeMutation = useGptColumnLike({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    }
  });

  const onClickStar = () => {
    if (curImg) {
      setStarImgSrc('/column/star_icon.png');
      setThumbImgSrc('/column/thumb_icon_green.png')
      setCurImg(false);
    } else {
      setStarImgSrc('/column/green_star_icon.png');
      setThumbImgSrc('/column/thumb_icon_green_full.png');
      setCurImg(true);
    }
  }

  const onClickLike = () => {
    if (curImg) {
      setThumbImgSrc('/column/thumb_icon_green.png')
      setCurImg(false);
    } else {
      setThumbImgSrc('/column/thumb_icon_green_full.png');
      setCurImg(true);
    }
    gptColumnLikeMutation.mutate({ id: columnId, type: 1 });
    // liked : false -> true
  }

  return (
    <AppContainer>
      <AppBar
        useLeftBack
      >
        <ShareIcon />
        <ScrapIcon />
      </AppBar>
      <Box position='relative' width='100%' height={215}>
        <Image
          className={style.background_image}
          src={gptColumnDetail?.backgroundImgUrl || '/column/column_banner.png'}
          alt="column post image"
          fill
        />
        <Box position='absolute' top={0} left={0} width='100%' height='100%' backgroundColor="rgba(0, 0, 0, 0.5)" />
      </Box>

      <Container pt={16} pb={32}>
        <FlexBox justifyContent='flex-start' gap={12} flexWrap='wrap'>
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

        <Stack mt={20}>
          <Stack gap={10}>
            <Text size={12} weight={400} color="#25292C">{gptColumnDetail.date}</Text>
            <Text size={24} weight={700} color="#191B1C">{gptColumnDetail.title}</Text>
          </Stack>

          <Box backgroundColor="#EDF0F3" radius={20} py={20} px={16} mt={20}>
            <Text size={16} weight={500} color="#A6ABAF">{gptColumnDetail.summary}</Text>
          </Box>

          <Box mt={28}>
            <Text size={16} weight={500} color="#191B1C">
              <div dangerouslySetInnerHTML={{ __html: gptColumnDetail.content }} />
            </Text>
          </Box>

          <FlexBox mt={36} direction='column'>
            <Text size={14} weight={600} color="#494F54">컬럼이 도움이 되셨나요?</Text>

            <FlexBox mt={20} gap={14}>
              <Button height={44} py={10} px={16} backgroundColor="#F3FCF2" radius={10}>
                <FlexBox gap={5}>
                  <LikeIcon />
                  <Text size={12} weight={600} color="#50BF50">도움이 됐어요</Text>
                </FlexBox>
              </Button>

              <Button height={44} py={10} px={16} backgroundColor="#F3F3F3" radius={10}>
                <Text size={12} weight={600} color="#7B8287">공유하기</Text>
              </Button>
            </FlexBox>

            <FlexBox mt={16} gap={7}>
              <Box>
                <LikeIconGray />
              </Box>
              <Text size={12} weight={500} color="#A6ABAF">{gptColumnDetail.totalLike}명이 도움을 받았어요!</Text>
            </FlexBox>
          </FlexBox>
        </Stack>
      </Container>

      <Box ref={ref} width='100%' height={10} backgroundColor="#EDF0F3" />

      <Box mt={20} mb={135}>
        <ColumnComment columnId={columnId} pageType='columnDetail' />
      </Box>

      {showOpinionBox && <OpinionBox columnId={columnId} imgSrc={userInfo?.avatarUrl} />}

    </AppContainer>
  )
}