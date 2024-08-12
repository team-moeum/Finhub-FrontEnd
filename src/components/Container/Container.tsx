// import styled from "@emotion/styled";
import { ReactNode } from "react";

import cssStyle from "./Container.module.css";

import { Box, BoxProps } from "@/components/Box";

type ContainerProps = {
  variant?: "standard" | "thin" | "thick" | "full";
  children: ReactNode;
} & BoxProps;

const variantMap = {
  standard: 16,
  thin: 10,
  thick: 32,
  full: 0
};

export const Container = ({
  variant = "standard",
  style = {},
  children,
  ...props
}: ContainerProps) => {
  return (
    <Box
      className={cssStyle.containerWrap}
      style={{ paddingLeft: variantMap[variant], paddingRight: variantMap[variant], ...style }}
      {...props}
    >
      {children}
    </Box>
  );
};
