"use client";

import { ReactNode } from "react"
import cssStyle from './Container.module.css';
import cx from 'classnames';
import { Box, BoxProps } from "@/components/Box";
import { useRecoilValue } from "recoil";
import { safeAreaState } from "@/states/client/atoms/safeArea";
import { useMounted } from "@/hooks/useMounted";

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
  const safeAreaTop = useRecoilValue(safeAreaState);
  const isMounted = useMounted();

  const containerStyle = {
    position: 'relative' as const,
    marginTop: disabledTopArea ? 0 : (isMounted ? safeAreaTop : 0),
    ...style
  };

  return (
    <Box
      className={cx([cssStyle.appContainerWrap, cssStyle.footer, header && cssStyle.header])}
      style={containerStyle}
      {...props}
    >
      {children}
    </Box>
  )
}