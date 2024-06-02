import { ReactNode } from "react"

import cssStyle from './Container.module.css';
import cx from 'classnames';
import { Box, BoxProps } from "@/components/Box";

type AppContainerProps = {
  children: ReactNode;
  footer?: boolean;
} & BoxProps;

export const AppContainer = ({ style = {}, children, ...props }: AppContainerProps) => {
  return (
    <Box
      className={cx([cssStyle.appContainerWrap, cssStyle.footer])}
      style={style}
      {...props}
    >
      {children}
    </Box>
  )
}
