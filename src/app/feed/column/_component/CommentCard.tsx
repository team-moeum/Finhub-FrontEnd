"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gptColumnComment } from "@/model/GptColumn";
import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { useModal } from "@/hooks/useModal";
import { DeleteCommentPopup } from "./Modal/DeleteCommentPopup";
import { EditCommentSheet } from "./Modal/EditCommentSheet";
import { COLUMN_LIKE_TYPE, useBanGptColumnComment, useDeleteGptColumnComment, useGptColumnLike } from "@/states/server/mutations";
import { useToast } from "@/components/Toast/useToast";
import { useSetRecoilState } from "recoil";
import { gptColumnCommentState } from "@/states/client/atoms/gptColumnComment";
import { BanCommentSheet } from "./Modal/BanCommentSheet";
import { BanCommentPopup } from "./Modal/BanCommentPopup";
import { useQueryClient } from "@tanstack/react-query";

import LikeIconGray from '@/public/column/thumb_icon_gray.svg';
import LikeIconGreenOn from '@/public/column/thumb_icon_green_on.svg';
import CommentEditIcon from '@/public/column/comment_edit_icon.svg';
import CommentBanToastIcon from '@/public/column/comment_toast_ban_icon.svg';
import { LoginSlide } from "@/app/_component/Catergory/LoginSlide";
import { isLoggedIn } from "@/utils/auth_client";

type CommentCardProps = {
  id: number;
  isMine: boolean;
  comment: gptColumnComment;
  refetch: () => void;
}

export const CommentCard = ({
  id,
  isMine,
  comment,
  refetch
}: CommentCardProps) => {
  const isLogin = isLoggedIn();
  const [like, setLike] = useState(false);
  const [totalLikeCnt, setTotalLikeCnt] = useState<number>(0);
  const setComment = useSetRecoilState(gptColumnCommentState);

  const EditCommentSheetModal = useModal();
  const BanCommentSheetModal = useModal();
  const DeleteCommentPopupModal = useModal();
  const BanCommentPopupModal = useModal();
  const LoginModal = useModal();

  const { showToast } = useToast();

  const queryClient = useQueryClient();
  const commentLikeMutation = useGptColumnLike({
    onMutate: () => {
      setLike(prevIsLiked => {
        setTotalLikeCnt(prevTotalLikeCnt => prevIsLiked ? prevTotalLikeCnt - 1 : prevTotalLikeCnt + 1);
        return !prevIsLiked;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gptColumnComment"] });
    },
    onError: () => {
      setLike(prevIsLiked => {
        setTotalLikeCnt(prevTotalLikeCnt => prevIsLiked ? prevTotalLikeCnt + 1 : prevTotalLikeCnt - 1);
        return !prevIsLiked;
      });
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning", duration: 2000 });
    }
  });

  const deleteCommentMutation = useDeleteGptColumnComment({
    onSuccess: (data) => {
      if (data.status === "FAIL") return showToast({ content: data.errorMsg, type: 'error' });

      showToast({ content: "댓글을 삭제했습니다!", type: "success", duration: 2000 });
      refetch();
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  const BanCommentMutation = useBanGptColumnComment({
    onSuccess: (data) => {
      if (data.status === "FAIL") return showToast({ content: data.errorMsg, type: 'error' });

      showToast({
        content:
          <Box>
            <FlexBox gap={10} justifyContent='flex-start'>
              <CommentBanToastIcon />
              {comment.nickname}님을 차단했습니다.
            </FlexBox>
          </Box>
        ,
        duration: 2000
      });

      refetch();
    },
    onError: () => {
      showToast({ content: "잠시후 다시 시도해주세요!", type: "warning" });
    }
  });

  useEffect(() => {
    setLike(comment.userLike);
    setTotalLikeCnt(comment.like);
  }, [comment.like])

  const handleCommentClick = () => {
    if (!isLogin) return LoginModal.open();
    if (comment.userComment) return;
    commentLikeMutation.mutate({ id: comment.id, type: COLUMN_LIKE_TYPE.comment });
  }

  const handleEditClick = () => {
    if (!isLogin) return LoginModal.open();
    if (isMine) return handleEditSheetModalOpen();
    return BanCommentSheetModal.open();
  }

  const handleEditSheetModalOpen = () => {
    setComment(comment.comment ?? "")
    EditCommentSheetModal.open()
  }

  const handleDeleteOpen = () => {
    EditCommentSheetModal.close();
    DeleteCommentPopupModal.open();
  }

  const handleDeleteComment = () => {
    deleteCommentMutation.mutate({ id })
  }

  const handleBanUser = () => {
    BanCommentMutation.mutate({ memberId: comment.writerId });
  }

  const handleBanPopupOpen = () => {
    BanCommentSheetModal.close();
    BanCommentPopupModal.open();
  }

  return (
    <>
      <Box px={16} py={12} radius={20} backgroundColor="#F6F7F9">
        <Stack gap={14}>
          <FlexBox gap={14} justifyContent='flex-start' position='relative'>
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

            <Box position='absolute' right={0} top={0} onClick={handleEditClick}>
              <CommentEditIcon />
            </Box>

          </FlexBox>

          <Box>
            <Text size={12} weight={500} color="#494F54">{comment.comment}</Text>
          </Box>

          <FlexBox justifyContent='flex-start' gap={4}>
            <Box>
              <Text size={12} weight={500} color="#A6ABAF">
                받은 추천:
                <Text color={like ? "#50BF50" : "#A6ABAF"}> {totalLikeCnt}개</Text>
              </Text>
            </Box>
            <Box onClick={handleCommentClick}>
              {like ? <LikeIconGreenOn /> : <LikeIconGray />}
            </Box>
          </FlexBox>
        </Stack>
      </Box>

      <EditCommentSheet show={EditCommentSheetModal.show} columnId={comment.id} onClose={EditCommentSheetModal.close} onDeleteClick={handleDeleteOpen} />
      <BanCommentSheet show={BanCommentSheetModal.show} columnId={comment.id} commentId={comment.id} onClose={BanCommentSheetModal.close} onBanClick={handleBanPopupOpen} />
      <DeleteCommentPopup show={DeleteCommentPopupModal.show} onCancel={DeleteCommentPopupModal.close} onDelete={handleDeleteComment} />
      <BanCommentPopup show={BanCommentPopupModal.show} name={comment.nickname} onCancel={BanCommentPopupModal.close} onBan={handleBanUser} />
      <LoginSlide show={LoginModal.show} onClose={LoginModal.close} />
    </>
  )
}