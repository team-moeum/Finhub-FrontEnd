import cssStyle from './Button.module.css';
import { PressButton } from "../PressAnimator";
import { SpacingType, getBoxSpacing } from '../Box/Box.style';

export type ButtonProps = {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  padding?: string | number;
  textColor?: string;
  backgroundColor?: string;
  pressBgColor?: string;
  pressTextColor?: string;
  disabledBgColor?: string;
  disabledTextColor?: string;
  border?: string;
  disabled?: boolean;
  animate?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement> & SpacingType;

export const Button = ({
  margin, my, mx, mt, mb, ml, mr,
  padding, py, px, pt, pb, pl, pr,
  color,
  width,
  height,
  radius,
  children,
  disabled = false,
  backgroundColor,
  textColor,
  border,
  style = {},
  animate=true,
  onClick,
  ...props
}: ButtonProps) => {

  const spacing = getBoxSpacing({ margin, padding, my, mx, mt, mb, ml, mr, py, px, pt, pb, pl, pr });

  return (
    <PressButton animate={animate} style={{width: 'fit-content'}}>
      <button
        className={cssStyle.base_button}
        style={{ 
          width, 
          height, 
          borderRadius: radius, 
          padding, 
          backgroundColor, 
          color: textColor, 
          border,
          ...spacing,
          ...style 
        }}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </PressButton>
  )
}
