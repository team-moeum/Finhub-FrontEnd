"use client";

import styled from "@emotion/styled";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import { gptColumnCommentState } from "@/states/client/atoms/gptColumnComment";
import { useEditGptColumnComment, useGptColumnComment } from "@/states/server/mutations";

import { AppBar } from "@/components/AppBar";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { AppContainer, Container } from "@/components/Container";
import { FlexRow } from "@/components/FlexRow";
import { Text } from "@/components/Text";
import { useToast } from "@/components/Toast/useToast";

export const COMMENT_POST_TYPE = {
  post: "post",
  edit: "edit",
} as const;

export const PostCommentScreen = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();
  const columnId = Number(useParams().columnId);
  const commentPostType = useSearchParams().get("type");
  const queryClient = useQueryClient();

  const [comment, setComment] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const editInitComment = useRecoilValue(gptColumnCommentState);

  const { showToast } = useToast();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (commentPostType === COMMENT_POST_TYPE.edit) setComment(editInitComment);
  }, [editInitComment]);

  const handleMoveNickNameMenu = () => {
    router.push("/menu/user/name");
  };

  const postCommentMutation = useGptColumnComment({
    onSuccess: data => {
      if (data.status === "FAIL") {
        if (data.errorMsg === "닉네임 설정 필요") {
          showToast({
            content: (
              <FlexRow>
                <Text>닉네임 설정이 필요해요!</Text>
                <Button
                  py={10}
                  px={12}
                  radius={6}
                  textColor="#FFF"
                  backgroundColor="#494F54"
                  onClick={handleMoveNickNameMenu}
                  style={{ pointerEvents: "auto" }}
                >
                  설정하기
                </Button>
              </FlexRow>
            ),
            type: "warning",
            duration: 4000
          });
          return;
        } else {
          showToast({ content: data.errorMsg, type: "warning" });
          return;
        }
      }

      queryClient.invalidateQueries({ queryKey: ["gptColumnComment"] });
      queryClient.invalidateQueries({ queryKey: ["myComment"] });
      router.back();
    },
    onError: () => {
      showToast({ content: "잠시 후 다시 이용해 주세요", type: "warning" });
    }
  });

  const editCommentMutation = useEditGptColumnComment({
    onSuccess: data => {
      if (data.status === "FAIL") {
        showToast({ content: data.errorMsg, type: "warning" });
        return;
      }

      queryClient.invalidateQueries({ queryKey: ["gptColumnComment"] });
      queryClient.invalidateQueries({ queryKey: ["myComment"] });
      router.back();
    },
    onError: () => {
      showToast({ content: "잠시 후 다시 이용해 주세요", type: "warning" });
    }
  });

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setComment(value);
    setIsSubmitEnabled(value.trim().length > 0);
  };

  const handleSubmitClick = () => {
    if (commentPostType === "post") {
      postCommentMutation.mutate({ id: columnId, comment: comment });
    } else {
      editCommentMutation.mutate({ id: columnId, comment: comment });
    }
  };

  return (
    <AppContainer>
      <AppBar useLeftBack title="의견">
        <Box onClick={handleSubmitClick}>
          <Text size={16} weight={500} color={isSubmitEnabled ? "#50BF50" : "#CDD1D5"}>
            등록
          </Text>
        </Box>
      </AppBar>

      <Container mt={18}>
        <Box>
          <TextAreaWrap
            ref={textAreaRef}
            placeholder={`욕설, 비방, 비하 등 의견은 남기지 말아주세요.\n\n(최대 200자)`}
            value={comment}
            onChange={handleCommentChange}
            maxLength={200}
          />
        </Box>
      </Container>
    </AppContainer>
  );
};

const TextAreaWrap = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  resize: none;
  font-size: 14px;
  padding: 0;
  caret-color: #50BF50;
`;
