'use client';

import Loading from "@/app/loading";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { LinkButton } from "@/components/LinkButton";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

import { useGptColumnCommentList, useUserInfo } from "@/states/server/queries";
import { useEffect, useMemo, useState } from "react";
import { CommentCard } from "./CommentCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import RefreshIcon from '@/public/column/refresh_icon.svg';
import SpeechBubbleIcon from '@/public/column/speech_bubble_icon.svg';

export const TAB_NUMBER = {
  popular: 1,
  recent: 2
} as const;

const PAGE_TYPE = {
  columnDetail: "columnDetail",
  commentDetatil: "commentDetatil"
} as const;

type TabKey = keyof typeof TAB_NUMBER;
type PageType = keyof typeof PAGE_TYPE;

type ColumnCommentProps = {
  columnId: number;
  pageType: PageType;
}
export const ColumnComment = ({ columnId, pageType }: ColumnCommentProps) => {
  const [tab, setTab] = useState<TabKey>('popular');

  const { data: userInfo } = useUserInfo();
  const {
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useGptColumnCommentList({
    id: columnId,
    type: TAB_NUMBER[tab],
    size: pageType === PAGE_TYPE.columnDetail ? 3 : 7
  });
  const commentList = useMemo(() => (data ? data.pages.flatMap((data) => (data.comments)) : []), [data]);

  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (pageType === PAGE_TYPE.columnDetail) return;
    if (isIntersecting && hasNextPage) fetchNextPage();
  }, [isIntersecting, hasNextPage])

  const handleRefreshClick = () => refetch();
  const handlePopularTabClick = () => setTab('popular');
  const handleRecentTabClick = () => setTab('recent');

  if (!isLoading && commentList.length === 0) {
    return (
      <Container>
        <Box>
          <Text size={16} weight={600} color="#191B1C">의견 나누기</Text>
        </Box>
        <Box mt={30} height={100} radius={20} backgroundColor="#EDF0F3">
          <FlexBox gap={16} height='100%'>
            <SpeechBubbleIcon />
            <Text size={14} weight={600} color="#A6ABAF">아직 나눈 의견이 없어요. 의견을 남겨주세요!</Text>
          </FlexBox>
        </Box>
      </Container>
    )
  }
  return (
    <Container>
      <FlexRow>
        <FlexBox gap={10}>
          <Text size={16} weight={600} color="#191B1C">의견 나누기</Text>
          <FlexBox onClick={handleRefreshClick}>
            <RefreshIcon />
          </FlexBox>
        </FlexBox>

        <FlexBox gap={12}>
          <Box onClick={handlePopularTabClick}>
            <Text size={14} weight={600} color={tab === 'popular' ? "#191B1C" : "#CDD1D5"}>인기순</Text>
          </Box>
          <Box onClick={handleRecentTabClick}>
            <Text size={14} weight={600} color={tab === 'recent' ? "#191B1C" : "#CDD1D5"}>최신순</Text>
          </Box>
        </FlexBox>
      </FlexRow>

      {isLoading
        ?
        <Box height={600}>
          <Loading height={200} />
        </Box>
        :
        <Box>
          <Stack mt={20} mb={15} gap={10}>
            {commentList?.map((item) => {
              return (
                <CommentCard key={item.id} id={item.id} comment={item} isMine={item.nickname === userInfo?.nickname} refetch={handleRefreshClick}/>
              )
            })}
          </Stack>

          {pageType === PAGE_TYPE.columnDetail && commentList?.length !== 0
            &&
            <LinkButton href={`/feed/column/${columnId}/comment`}>
              <FlexBox height={36} backgroundColor="#F6F7F9" radius={10}>
                <Text size={15} weight={600} color="#A6ABAF">더보기</Text>
              </FlexBox>
            </LinkButton>
          }

          {pageType === PAGE_TYPE.commentDetatil && commentList?.length !== 0
            &&
            <Box ref={ref} height={20} />
          }
        </Box>
      }
    </Container>
  )
}
