import { CSSProperties } from 'react';
import CssStyle from './PressAnimator.module.css';
import cx from 'classnames';

interface PressProps {
  py?: number;
  radius?: number;
  animate?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  children: React.ReactNode;
}

export const PressBox = ({ py = 16, radius = 10, animate = true, style={}, children }: PressProps) => {
  return (
    <div
      className={cx(CssStyle.pressBox_backgroundWrap, {
        [CssStyle.noBackgroundChange]: !animate,
      })}
      style={{
        paddingLeft: py,
        paddingRight: py,
        borderRadius: radius,
        ...style
      }}>
      <div
        className={cx(CssStyle.pressBox_ScaleWrap, {
          [CssStyle.noScaleChange]: !animate,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export const PressButton = ({ onClick, animate = true, style={}, children }: Partial<PressProps>) => {
  return (
    <div
      className={cx(CssStyle.pressButton_ScaleWrap, {
        [CssStyle.noScaleChange]: !animate,
      })}
      onClick={onClick}
      style={{...style}}
    >
      {children}
    </div>
  )
}