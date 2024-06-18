"use client";

import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { LinkBox } from "@/components/LinkButton";
import { PressBox } from "@/components/PressAnimator";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { CommentReportReason } from "@/model/CommentReportReason";

import RadioIcon from '@/public/icons/radio.svg';
import RadioOnIcon from '@/public/icons/radio_on.svg';
import { useState } from "react";

const ReasonRadioItem = ({
  selectedId,
  reason,
  onClick
}: {
  selectedId: number, 
  reason: CommentReportReason,
  onClick: () => void;
}) => {
  return (
    <FlexBox width='100%' height={40} px={16} onClick={onClick}>
      <FlexRow>
        <Text size={16} weight={500} color="#25292C">{reason.reason}</Text>
        {reason.id === selectedId 
          ? <RadioOnIcon />
          : <RadioIcon />
        }
      </FlexRow>
    </FlexBox>
  )
}


type ReportReasonSheetProps = {
  show: boolean;
  reportReasons: CommentReportReason[];
  onClose: () => void;
  selectedId: number;
  onItemClick: (id: number) => void;
}

export const ReportReasonSheet = ({ show, reportReasons, onClose, selectedId, onItemClick }: ReportReasonSheetProps) => {
  return (
    <BottomSheet 
      title="신고 유형 선택하기"
      isOpen={show} 
      onClose={onClose}
    >
      <Stack gap={10} px={16} pb={22}>
        {reportReasons.map(reason => (
          <ReasonRadioItem 
            selectedId={selectedId}
            reason={reason}
            onClick={() => onItemClick(reason.id)}
          />
        ))}
      </Stack>
    </BottomSheet>
  )
}