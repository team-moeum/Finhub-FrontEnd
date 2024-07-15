"use client";

import { AppBar } from "@/components/AppBar"
import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container"
import { FlexRow } from "@/components/FlexRow";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import ArrowDownIcon from '@/public/icons/icon_arrow_down.svg';
import { FlexBox } from "@/components/FlexBox";
import { ReportReasonSheet } from "@/app/feed/column/_component/Modal/ReportReasonSheet";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useReportReasons } from "@/states/server/queries";
import { useReportGptColumnComment } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";

export const ReportCommentScreen = () => {
  const router = useRouter();
  const commentId = Number(useSearchParams().get('commentId'));

  const [selectedId, setSelectedId] = useState(0);

  const reasonSheet = useModal();
  
  const { showToast } = useToast();

  const { data: reportReasons } = useReportReasons();

  const sumbitReasonMutation = useReportGptColumnComment({
    onSuccess: (data) => {
      if (data.status === "FAIL") {
        showToast({content: data.errorMsg, type: 'warning'});
      }

      if (data.status === "SUCCESS") {
        showToast({content: "신고하기 접수 되었습니다.", type: 'success'});
      }

      return router.back();
    },
    onError: () => {
      showToast({content: "잠시후 다시 시도해주세요!", type: "warning"});
    }
  })

  const handleRadioClick = (id: number) => setSelectedId(id);
  const handleSubmitClick = () => sumbitReasonMutation.mutate({commentId, reportId: selectedId});

  return (
    <AppContainer>
      <AppBar
        useLeftBack
        title="신고하기"
      />

      <Container mt={18}>
        <Stack gap={10}>
          <Box>
            <Text size={14} weight={600} color="#7B8287">신고 유형</Text>
          </Box>
          <Box 
            border={selectedId === 0 ? "1px solid #CDD1D5" : "1px solid #50BF50"}
            radius={10} 
            height={40} 
            onClick={reasonSheet.open}
          >
            <FlexBox width='100%' height='100%' px={16}>
              <FlexRow>
                {selectedId === 0
                  ?
                  <Text size={14} weight={400} color="#CDD1D5">
                    신고 유형을 선택해주세요.
                  </Text>
                  : 
                  <Text size={14} weight={400} color="#25292C">
                    {reportReasons.find(reason => reason.id === selectedId)?.reason}
                  </Text>
                }
                <ArrowDownIcon />
              </FlexRow>
            </FlexBox>
          </Box>
        </Stack>
      </Container>

      <Box position='fixed' bottom={54}>
        <Button
          width='100vw'
          height={50}
          backgroundColor="#50BF50"
          animate={false}
          disabled={selectedId === 0}
          disabledBgColor="#bebebe"
          onClick={handleSubmitClick}
        >
          <Text size={16} weight={600} color="#FFF">제출하기</Text>
        </Button>
      </Box>
      <ReportReasonSheet
        show={reasonSheet.show}
        reportReasons={reportReasons}
        onClose={reasonSheet.close}
        selectedId={selectedId}
        onItemClick={handleRadioClick}
      />
    </AppContainer>
  )
}


