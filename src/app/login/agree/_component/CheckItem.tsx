import { CheckBoxIcon, CheckBoxOnIcon } from "./CheckIcon";

import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";

export const CheckItem = ({
  on,
  onClick,
  children
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <FlexBox gap={10} justifyContent="flex-start">
      <Box onClick={onClick}>{on ? <CheckBoxOnIcon /> : <CheckBoxIcon />}</Box>
      {children}
    </FlexBox>
  );
};
