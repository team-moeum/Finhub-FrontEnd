import { CSSProperties } from "react";

import cssStyle from "./Footer.module.css";

type FooterProps = {
  bottom?: number;
  style?: CSSProperties;
  children: React.ReactNode;
};

export const Footer = ({ bottom, style = {}, children }: FooterProps) => {
  const combinedStyle: CSSProperties = {
    ...(bottom !== undefined ? { bottom: `${bottom}px` } : {}),
    ...style
  };

  return (
    <div className={cssStyle.footerWrap} style={combinedStyle}>
      {children}
    </div>
  );
};
