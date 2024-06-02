import { CSSProperties } from 'react';
import cssStyle from './Footer.module.css';

type FooterProps = {
  style: CSSProperties,
  children: React.ReactNode,
}

export const Footer = ({ style={}, children }: FooterProps) => {
  return (
    <div className={cssStyle.footerWrap} style={style}>
      {children}
    </div>
  )
}