import { Popup } from "@/components/Popup/Popup"

type DeleteCommentPopupProps = {
  show: boolean
  onCancel?: () => void
  onDelete?: () => void
}

export const DeleteCommentPopup = ({show, onCancel, onDelete}: DeleteCommentPopupProps) => {
  return (
    <Popup 
      show={show}
      onClose={onCancel}
      onLeftClick={onCancel}
      onRightClick={onDelete}
      leftButtonText="취소"
      rightButtonText="삭제"
    >
      댓글을 삭제하시겠습니까?
    </Popup>
  )
}