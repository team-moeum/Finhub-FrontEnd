"use client";

import Image from "next/image"
import style from "../ColumnPost.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { AppBar } from "@/components/AppBar";
import { Stack } from "@/components/Stack";
import { FlexBox } from "@/components/FlexBox";
import { AppContainer, Container } from "@/components/Container";

import { OpinionBox } from "./OpinionBox";
import { ColumnComment } from "../../_component/ColumnComment";

import { useToast } from "@/components/Toast/useToast";
import { ScrapToast } from "@/components/Toast/ScrapToast";
import { queryKeys, useGptColumnDetail, useUserInfo } from "@/states/server/queries";
import { COLUMN_LIKE_TYPE, SCRAP_TYPE, useGptColumnLike, useScrap } from "@/states/server/mutations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import LikeIcon from '@/public/column/thumb_icon_green.svg';
import LikeOnIcon from '@/public/column/thumb_icon_green_on.svg';
import LikeIconGray from '@/public/column/thumb_icon_gray.svg';

import ShareIcon from '@/public/icons/icon_share_white.svg';
import ScrapIcon from '@/public/icons/Icon_scrap_white.svg';
import ScrapOnIcon from '@/public/icons/scrap_icon_on.svg';
import { isLoggedIn } from "@/utils/auth_client";
import { useModal } from "@/hooks/useModal";
import { LoginSlide } from "@/app/_component/Catergory/LoginSlide";

export const ColumnDetailScreen = () => {
  const isLogin = isLoggedIn();
  const columnId = Number(useParams().columnId);

  const [isLiked, setIsLiked] = useState(false);
  const [isScrapped, setIsScrapped] = useState(false);
  const [totalLikeCnt, setTotalLikeCnt] = useState<number>(0);

  const { data: gptColumnDetail } = useGptColumnDetail(columnId);
  const { data: userInfo } = useUserInfo();

  const { showToast } = useToast();
  const LoginModal = useModal();
  const { ref, isIntersecting: showOpinionBox } = useIntersectionObserver({ threshold: 0.2 });

  const queryClient = useQueryClient();
  const columnScrapMutation = useScrap({
    onMutate: () => {
      setIsScrapped(prev => !prev);
    },
    onSuccess: () => {
      if (isScrapped) {
        showToast({ content: <ScrapToast />, duration: 2000 });
      }

      queryClient.invalidateQueries({ queryKey: queryKeys.gptColumnDetail(columnId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.myScrap("column") });
    },
    onError: () => {
      setIsScrapped(prev => !prev);
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning", duration: 2000 });
    }
  });
  const columnLikeMutation = useGptColumnLike({
    onMutate: () => {
      setIsLiked(prevIsLiked => {
        setTotalLikeCnt(prevTotalLikeCnt => prevIsLiked ? prevTotalLikeCnt - 1 : prevTotalLikeCnt + 1);
        return !prevIsLiked;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.gptColumnDetail(columnId) });
    },
    onError: () => {
      setIsLiked(prevIsLiked => {
        setTotalLikeCnt(prevTotalLikeCnt => prevIsLiked ? prevTotalLikeCnt + 1 : prevTotalLikeCnt - 1);
        return !prevIsLiked;
      });
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning", duration: 2000 });
    }
  });

  useEffect(() => {
    setIsScrapped(gptColumnDetail.scrapped)
    setIsLiked(gptColumnDetail.liked)
    setTotalLikeCnt(gptColumnDetail.totalLike);
  }, [gptColumnDetail.scrapped, gptColumnDetail.liked, gptColumnDetail.totalLike])

  const handleScrapClick = () => {
    if (!isLogin) return LoginModal.open();
    columnScrapMutation.mutate({ id: columnId, type: SCRAP_TYPE.column })
  }

  const handleColumnClick = () => {
    if (!isLogin) return LoginModal.open();
    columnLikeMutation.mutate({ id: columnId, type: COLUMN_LIKE_TYPE.column });
  }

  return (
    <AppContainer>
      <AppBar
        useLeftBack
      >
        <Box>
          <ShareIcon />
        </Box>
        <Box onClick={handleScrapClick}>
          {isScrapped ? <ScrapOnIcon /> : <ScrapIcon />}
        </Box>
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
              <Button 
                height={44} 
                py={10} 
                px={16} 
                backgroundColor="#F3FCF2" 
                radius={10}
                onClick={handleColumnClick}
              >
                <FlexBox gap={5}>
                  {isLiked ? <LikeOnIcon /> : <LikeIcon />}
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
              <Text size={12} weight={500} color="#A6ABAF">{totalLikeCnt}명이 도움을 받았어요!</Text>
            </FlexBox>
          </FlexBox>
        </Stack>
      </Container>

      <Box ref={ref} width='100%' height={10} backgroundColor="#EDF0F3" />

      <Box mt={20} mb={135}>
        <ColumnComment columnId={columnId} pageType='columnDetail' />
      </Box>

      {showOpinionBox && isLogin && <OpinionBox columnId={columnId} imgSrc={userInfo?.avatarUrl} />}

      <LoginSlide show={LoginModal.show} onClose={LoginModal.close} />

    </AppContainer>
  )
}