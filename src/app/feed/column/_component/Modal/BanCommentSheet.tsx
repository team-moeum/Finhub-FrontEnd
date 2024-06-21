import { BottomSheet } from "@/components/BottomSheet/BottomSheet"
import { FlexBox } from "@/components/FlexBox";
import { LinkBox } from "@/components/LinkButton"
import { PressBox } from "@/components/PressAnimator";
import { Stack } from "@/components/Stack"
import { Text } from "@/components/Text";

import ReportIcon from '@/public/column/comment_report_icon.svg';
import BanIcon from '@/public/column/comment_ban_icon.svg';

type BanCommentSheetProps = {
  show: boolean,
  columnId: number,
  commentId: number,
  onClose: () => void,
  onBanClick: () => void
}

export const BanCommentSheet = ({ show, columnId, commentId, onClose, onBanClick }: BanCommentSheetProps) => {
  return (
    <BottomSheet isOpen={show} onClose={onClose}>
      <Stack gap={10} px={16} py={32}>
        <LinkBox href={`/feed/column/${columnId}/comment/report?commentId=${commentId}`}>
          <FlexBox justifyContent='flex-start' gap={19} py={10}>
            <ReportIcon />
            <Text size={24} weight={500} color="#494F54">신고하기</Text>
          </FlexBox>
        </LinkBox>
        <PressBox onClick={onBanClick}>
          <FlexBox justifyContent='flex-start' gap={15} py={10}>
            <BanIcon />
            <Text size={24} weight={500} color="#494F54">차단하기</Text>
          </FlexBox>
        </PressBox>
      </Stack>
    </BottomSheet>
  )
}