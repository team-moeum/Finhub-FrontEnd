import { Stack, StackProps } from "@/components/Stack";
import { Property } from 'csstype'

export type JustifyContentType = Property.JustifyContent;
export type AlignItemsType = Property.AlignItems;
export type FlexWrapType = Property.FlexWrap

export type FlexBoxProps = {
  gap?: number;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  flexWrap?: FlexWrapType;
  flexGrow?: number | string;
  flexShrink?: number | string;
  flexBasis?: number | string;
  flex?: number | string;
} & StackProps;

export const FlexBox = ({
  direction = 'row',
  gap,
  justifyContent = "center", 
  alignItems = "center",
  flexWrap,
  flexGrow,
  flexBasis,
  flexShrink,
  flex,
  style = {},
  children, 
  ...props 
}: FlexBoxProps) => {
  return (
    <Stack style={{
      flexDirection: direction,
      gap, 
      justifyContent,
      alignItems,
      flexWrap,
      flexGrow,
      flexBasis,
      flexShrink,
      flex,
      ...style
    }} {...props}>
      {children}
    </Stack>
  )
};