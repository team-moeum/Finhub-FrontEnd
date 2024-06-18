"use client";

import { AppBar } from "@/components/AppBar"
import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container"
import { Text } from "@/components/Text";
import { useToast } from "@/components/Toast/useToast";
import { gptColumnCommentState } from "@/states/client/atoms/gptColumnComment";
import { useEditGptColumnComment, useGptColumnComment } from "@/states/server/mutations";
import styled from "@emotion/styled";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const COMMENT_POST_TYPE = {
  post: "post",
  edit: "edit"
} as const;

export const PostCommentScreen = () => {
  const router = useRouter();
  const columnId = Number(useParams().columnId);
  const commentPostType = useSearchParams().get('type');
  
  const [comment, setComment] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const editInitComment = useRecoilValue(gptColumnCommentState);

  const { showToast } = useToast();

  useEffect(() => {
    if (commentPostType === 'edit') setComment(editInitComment);
  }, [editInitComment]);

  const postCommentMutation = useGptColumnComment({
    onSuccess: (data) => {
      if (data.status === "FAIL") {
        showToast({content: data.errorMsg, type: 'warning'});
        return;
      }

      router.back();
    },
    onError: () => {
      showToast({content: "잠시 후 다시 이용해 주세요", type: 'warning'});
    }
  })

  const editCommentMutation = useEditGptColumnComment({
    onSuccess: (data) => {
      if (data.status === "FAIL") {
        showToast({content: data.errorMsg, type: 'warning'});
        return;
      }

      router.back();
    },
    onError: () => {
      showToast({content: "잠시 후 다시 이용해 주세요", type: 'warning'});
    }
  })

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setComment(value);
    setIsSubmitEnabled(value.trim().length > 0);
  };

  const handleSubmitClick = () => {
    if (commentPostType === 'post') {
      postCommentMutation.mutate({id: columnId, comment: comment})
    } else {
      editCommentMutation.mutate({id: columnId, comment: comment})
    }
  }

  return (
    <AppContainer>
      <AppBar
        fixed={false}
        useLeftBack
        leftBackColor='black'
        title="의견"
      >
        <Box onClick={handleSubmitClick}>
          <Text size={16} weight={500} color={isSubmitEnabled ? "#50BF50" : "#CDD1D5"}>등록</Text>
        </Box>
      </AppBar>

      <Container mt={18}>
        <Box>
          <TextAreaWrap
            placeholder={`욕설, 비방, 비하 등 의견은 남기지 말아주세요.\n\n(최대 200자)`}
            value={comment}
            onChange={handleCommentChange}
            maxLength={200}
          />
        </Box>
      </Container>
    </AppContainer>
  )
}

const TextAreaWrap = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  resize: none;
  padding: 0;
  caret-color: #50BF50;
`



