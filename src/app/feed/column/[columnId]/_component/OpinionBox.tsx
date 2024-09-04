"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { COMMENT_POST_TYPE } from "../comment/post/_component/PostCommentScreen";

import { ZINDEX } from "@/styles/zIndex";

import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { PressBox } from "@/components/PressAnimator";
import { Text } from "@/components/Text";

export const OpinionBox = ({
  columnId,
  imgSrc,
  onClick
}: {
  columnId: number;
  imgSrc?: string;
  onClick?: () => void;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();
    return router.push(`/feed/column/${columnId}/comment/post?type=${COMMENT_POST_TYPE.post}`);
  };

  return (
    <Box
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      backgroundColor="#FFF"
      style={{
        borderTop: "0.5px solid #CDD1D5"
      }}
      zIndex={ZINDEX.modal - 1}
    >
      <PressBox onClick={handleClick} radius={0}>
        <FlexBox width="100%" height={72} gap={14} justifyContent="flex-start">
          <Image src={imgSrc || "/column/user_img.svg"} alt="User Image" width={48} height={48} />
          <Text size={15} weight={600} color="#CDD1D5">
            의견 남기기
          </Text>
        </FlexBox>
      </PressBox>
    </Box>
  );
};
