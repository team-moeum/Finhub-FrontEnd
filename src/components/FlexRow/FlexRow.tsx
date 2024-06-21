import { FlexBox, FlexBoxProps } from "@/components/FlexBox";

export type FlexRowProps = {
} & FlexBoxProps;

export const FlexRow = ({
  direction = 'row',
  justifyContent = "space-between",
  alignItems = "center",
  flexWrap = 'wrap',
  style = {},
  children,
  ...props }: FlexRowProps) => {
  return (
    <FlexBox
      style={{
        flexDirection: direction,
        flexWrap,
        justifyContent,
        alignItems,
        ...style,
      }}
      width={'100%'}
      {...props}>
      {children}
    </FlexBox>
  )
};