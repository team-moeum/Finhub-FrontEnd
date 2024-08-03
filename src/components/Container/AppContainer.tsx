"use client";

import { ReactNode } from "react"
import cssStyle from './Container.module.css';
import cx from 'classnames';
import { Box, BoxProps } from "@/components/Box";
import { useRecoilValue } from "recoil";
import { safeAreaState } from "@/states/client/atoms/safeArea";

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
  const top = useRecoilValue(safeAreaState);

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