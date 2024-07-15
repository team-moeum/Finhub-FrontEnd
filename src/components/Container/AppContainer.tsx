"use client";

import { ReactNode } from "react"
import cssStyle from './Container.module.css';
import cx from 'classnames';
import { Box, BoxProps } from "@/components/Box";
import { userSafeAreaTop } from "@/hooks/useSafeAreaTop";

type AppContainerProps = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
  disabledTopArea?: boolean;
} & BoxProps;

export const AppContainer = ({ 
  footer=true,
  header=true,
  disabledTopArea=false,
  style = {},
  children,
  ...props
}: AppContainerProps) => {
  const top = userSafeAreaTop();

  return (
    <Box
      className={cx([cssStyle.appContainerWrap, cssStyle.footer, header && cssStyle.header])}
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