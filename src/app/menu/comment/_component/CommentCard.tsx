"use client";

import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";

import { DeleteCommentPopup } from "@/app/feed/column/_component/Modal/DeleteCommentPopup";
import { EditCommentSheet } from "@/app/feed/column/_component/Modal/EditCommentSheet";

import { gptColumnCommentState } from "@/states/client/atoms/gptColumnComment";
import { userState } from "@/states/client/atoms/user";
import { useDeleteGptColumnComment } from "@/states/server/mutations";

import { useModal } from "@/hooks/useModal";

import CommentEditIcon from "@/public/column/comment_edit_icon.svg";
import LikeIconGray from "@/public/column/thumb_icon_gray.svg";
import MenuComment1Icon from "@/public/icons/menu_comment1_icon.svg";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { FlexBox } from "@/components/FlexBox";
import { LinkButton } from "@/components/LinkButton";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { useToast } from "@/components/Toast/useToast";

type CommentCardProps = {
  commentId: number;
  columnId: number;
  isMine: boolean;
  title: string;
  comment: string;
  like: number;
  date: string;
  refetch: () => void;
};

export const CommentCard = ({
  commentId,
  columnId,
  isMine,
  title,
  comment,
  like,
  date,
  refetch
}: CommentCardProps) => {
  const format = (inputDate: string) => {
    const year = inputDate.substring(0, 4);
    const month = inputDate.substring(4, 6);
    const day = inputDate.substring(6, 8);
    return `${year}.${month}.${day}`;
  };
  const router = useRouter();

  const [totalLikeCnt, setTotalLikeCnt] = useState<number>(like);
  const setComment = useSetRecoilState(gptColumnCommentState);

  const EditCommentSheetModal = useModal();
  const DeleteCommentPopupModal = useModal();

  const { showToast } = useToast();
  const queryClient = useQueryClient;

  const deleteCommentMutation = useDeleteGptColumnComment({
    onSuccess: data => {
      if (data.status === "FAIL") return showToast({ content: data.errorMsg, type: "error" });

      showToast({ content: "댓글을 삭제했습니다!", type: "success", duration: 2000 });
      refetch();
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const handleEditClick = () => {
    if (isMine) return handleEditSheetModalOpen();
  };

  const handleEditSheetModalOpen = () => {
    setComment(comment ?? "");
    EditCommentSheetModal.open();
  };

  const handleDeleteOpen = () => {
    EditCommentSheetModal.close();
    DeleteCommentPopupModal.open();
  };

  const handleDeleteComment = () => {
    deleteCommentMutation.mutate({ id: commentId });
    DeleteCommentPopupModal.close();
  };

  const handleMoveColumn = () => {
    router.push(`/feed/column/${columnId}`);
  };

  const [userInfo, _] = useRecoilState(userState);

  return (
    <>
      <Box
        px={16}
        py={12}
        radius={20}
        backgroundColor="#FFF"
        boxShadow="4px 4px 10px 0px rgba(34,34,34,0.06)"
      >
        <Stack gap={14}>
          <LinkButton width="100%" href={`/feed/column/${columnId}`}>
            <FlexBox
              width="100%"
              height={78}
              backgroundColor="#F3FCF2"
              radius={20}
              pb={20}
              pt={20}
              pr={15}
              pl={15}
              onClick={handleMoveColumn}
              justifyContent="space-between"
              position="relative"
            >
              <Text size={16} weight={700} color="#50BF50">
                {title}
              </Text>
              <MenuComment1Icon />
            </FlexBox>
          </LinkButton>

          <FlexBox gap={14} mx={2} mt={10} justifyContent="flex-start" position="relative">
            <Image
              src={userInfo.avatarUrl || "/images/default_avatar_img.png"}
              alt="user Img"
              width={48}
              height={48}
            />
            <Stack gap={4}>
              <Text size={14} weight={600} color="#494F54">
                {userInfo.nickname}
              </Text>
              <Text size={10} weight={500} color="#CDD1D5">
                {format(date)}
              </Text>
            </Stack>

            <Box position="absolute" right={0} top={5} onClick={handleEditClick}>
              <CommentEditIcon />
            </Box>
          </FlexBox>

          <Box mx={3}>
            <Text size={12} weight={500} color="#494F54">
              {comment}
            </Text>
          </Box>

          <FlexBox mb={2} mx={2} justifyContent="flex-start" gap={4}>
            <Box>
              <Text size={12} weight={500} color="#A6ABAF">
                받은 추천:
                <Text color={totalLikeCnt ? "#50BF50" : "#A6ABAF"}> {totalLikeCnt}개</Text>
              </Text>
            </Box>
            <Box>{<LikeIconGray />}</Box>
          </FlexBox>
        </Stack>
      </Box>

      <EditCommentSheet
        show={EditCommentSheetModal.show}
        columnId={commentId}
        onClose={EditCommentSheetModal.close}
        onDeleteClick={handleDeleteOpen}
      />
      <DeleteCommentPopup
        show={DeleteCommentPopupModal.show}
        onCancel={DeleteCommentPopupModal.close}
        onDelete={handleDeleteComment}
      />
    </>
  );
};
