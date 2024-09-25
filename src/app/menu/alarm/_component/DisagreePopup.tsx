import { Popup } from "@/components/Popup";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";

export const DisagreePopup: React.FC<{
  show: boolean;
  onClose: () => void;
  onDisagree: () => void;
}> = ({ show, onClose, onDisagree }) => (
  <Popup
    show={show}
    onClose={onClose}
    onLeftClick={onClose}
    onRightClick={onDisagree}
    leftButtonText="다음에"
    rightButtonText="철회하기"
    rightButtonBgColor="#EF7676"
  >
    <Stack gap={26}>
      <Text weight={800} color="#191B1C" size={18} textAlign="center">
        마케팅 정보 수신 동의 철회
      </Text>
      <Text weight={600} color="#7B8287" size={15} lineHeight="16px" textAlign="center">
        마케팅 정보 수신 동의를 철회할까요?
      </Text>
    </Stack>
  </Popup>
);
