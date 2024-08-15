import { Popup } from "@/components/Popup/Popup";

type DeleteCommentPopupProps = {
  show: boolean;
  name: string;
  onCancel?: () => void;
  onBan?: () => void;
};

export const BanCommentPopup = ({ show, name, onCancel, onBan }: DeleteCommentPopupProps) => {
  return (
    <Popup
      show={show}
      onClose={onCancel}
      onLeftClick={onCancel}
      onRightClick={onBan}
      leftButtonText="취소"
      rightButtonText="차단"
    >
      {name}님을 차단하시겠습니까?
    </Popup>
  );
};
