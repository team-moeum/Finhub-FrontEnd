import { FlexBox } from "@/components/FlexBox";
import { Text } from "@/components/Text";

export const PushMarketingTableRow = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <FlexBox width="100%" border="1px solid #EDF0F3">
      <FlexBox pt={19} pb={18} width={84} backgroundColor="#E6E8EB">
        <Text
          textAlign="center"
          color="#494F54"
          size={14}
          weight={600}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {label}
        </Text>
      </FlexBox>
      <FlexBox flex={1} justifyContent="flex-start" pl={16} pr={5}>
        <Text color="#50BF50" size={14} weight={500} lineHeight="16px">
          {desc}
        </Text>
      </FlexBox>
    </FlexBox>
  );
};
