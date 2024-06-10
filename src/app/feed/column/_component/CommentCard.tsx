"use client";

import Image from "next/image";
import { useState } from "react";
import { gptColumnComment } from "@/model/GptColumn";
import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

import LikeIconGray from '@/public/column/thumb_icon_gray.svg';
import LikeIconGreenOn from '@/public/column/thumb_icon_green_on.svg';

type CommentCardProps = {
  comment: gptColumnComment
}

export const CommentCard = ({
  comment
}: CommentCardProps) => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => setLike(prev => !prev);

  return (
    <Box px={16} py={12} radius={20} backgroundColor="#F6F7F9">
      <Stack gap={14}>
        <FlexBox gap={14} justifyContent='flex-start'>
          <Image
            src={comment?.avatarImgPath || '/images/default_avatar_img.png'}
            alt="user Img"
            width={48}
            height={48}
          />
          <Stack gap={4}>
            <Text size={14} weight={600} color="#494F54">{comment.nickname}</Text>
            <Text size={10} weight={500} color="#CDD1D5">{comment.date}</Text>
          </Stack>
        </FlexBox>

        <Box>
          <Text size={12} weight={500} color="#494F54">{comment.comment}</Text>
        </Box>

        <FlexBox justifyContent='flex-start' gap={4}>
          <Box>
            <Text size={12} weight={500} color="#A6ABAF">
              받은 추천:
              <Text color={like ? "#50BF50" : "#A6ABAF"}> {comment.like}개</Text>
            </Text>
          </Box>
          <Box onClick={handleLikeClick}>
            {like ? <LikeIconGreenOn /> : <LikeIconGray />}
          </Box>
        </FlexBox>
      </Stack>
    </Box>
  )
}