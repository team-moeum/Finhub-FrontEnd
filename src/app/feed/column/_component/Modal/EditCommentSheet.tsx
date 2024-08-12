import { COMMENT_POST_TYPE } from "../../[columnId]/comment/post/_component/PostCommentScreen";

import EditIcon from "@/public/column/edit_icon.svg";
import DeleteIcon from "@/public/column/trash_icon.svg";

import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { FlexBox } from "@/components/FlexBox";
import { LinkBox } from "@/components/LinkButton";
import { PressBox } from "@/components/PressAnimator";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

type EditCommentSheetProps = {
  show: boolean;
  columnId: number;
  onClose: () => void;
  onDeleteClick: () => void;
};

export const EditCommentSheet = ({
  show,
  columnId,
  onClose,
  onDeleteClick
}: EditCommentSheetProps) => {
  return (
    <BottomSheet isOpen={show} onClose={onClose}>
      <Stack gap={10} px={16} py={32}>
        <LinkBox href={`/feed/column/${columnId}/comment/post?type=${COMMENT_POST_TYPE.edit}`}>
          <FlexBox justifyContent="flex-start" gap={15} py={10}>
            <EditIcon />
            <Text size={24} weight={500} color="#494F54">
              수정하기
            </Text>
          </FlexBox>
        </LinkBox>
        <PressBox onClick={onDeleteClick}>
          <FlexBox justifyContent="flex-start" gap={15} py={10}>
            <DeleteIcon />
            <Text size={24} weight={500} color="#494F54">
              삭제하기
            </Text>
          </FlexBox>
        </PressBox>
      </Stack>
    </BottomSheet>
  );
};
