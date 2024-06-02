import Image from "next/image"

import { Text } from "@/components/Text"
import { Box } from "@/components/Box"
import { FlexBox } from "@/components/FlexBox"
import { LinkBox } from "@/components/LinkButton"

export const OpinionBox = ({ columnId, imgSrc }: { columnId: number, imgSrc?: string }) => {
  return (
    <Box
      position='fixed'
      left={0}
      right={0}
      bottom={54}
      backgroundColor="#FFF"
      style={{
        borderTop: "0.5px solid #CDD1D5"
      }}
      zIndex={999}
    >
      <LinkBox href={`/feed/column/${columnId}/comment/post`} radius={0}>
        <FlexBox width='100%' height={72} gap={14} justifyContent='flex-start'>
          <Image
            src={imgSrc || '/column/user_img.png'}
            alt="User Image"
            width={48}
            height={48}
          />
          <Text size={15} weight={600} color="#CDD1D5">의견 남기기</Text>
        </FlexBox>
      </LinkBox>
    </Box>
  )
}