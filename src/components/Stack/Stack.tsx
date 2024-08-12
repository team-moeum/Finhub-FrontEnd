import styled from "@emotion/styled";
import { Property } from "csstype";

import { Box, BoxProps } from "@/components/Box";

type FlexDirectionType = Property.FlexDirection;

export type StackProps = Omit<BoxProps, "gap"> & {
  gap?: number | string;
  direction?: FlexDirectionType;
};

export const Stack = ({
  gap = 0,
  direction = "column",
  style = {},
  children,
  ...props
}: StackProps) => {
  return (
    <Box
      display="flex"
      style={{
        flexDirection: direction,
        gap: gap,
        ...style
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
