"use client";

import { ReactNode } from "react"
import cssStyle from './Container.module.css';
import cx from 'classnames';
import { Box, BoxProps } from "@/components/Box";
import { useSafeAreaTop } from "@/hooks/useSafeAreaTop";

type AppContainerProps = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
  disabledTopArea?: boolean;
} & BoxProps;

export const AppContainer = ({ 
  footer=false,
  header=true,
  disabledTopArea=false,
  style = {},
  children,
  ...props
}: AppContainerProps) => {
  const top = useSafeAreaTop();

  return (
    <Box
      className={cx([cssStyle.appContainerWrap, footer && cssStyle.footer, header && cssStyle.header])}
      style={{
        position: 'relative',
        marginTop: disabledTopArea ? 0 : top,
        ...style
      }}
      {...props}
    >
      {children}
    </Box>
  )
}