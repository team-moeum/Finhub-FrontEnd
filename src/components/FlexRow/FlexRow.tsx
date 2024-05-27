import { FlexBox, FlexBoxProps } from "@/components/FlexBox";

export type FlexRowProps = {
} & FlexBoxProps;

export const FlexRow = ({
  direction = 'row',
  justifyContent = "space-between",
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
        ...style,
      }}
      width={'100%'}
      {...props}>
      {children}
    </FlexBox>
  )
};