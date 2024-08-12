import { SpacingType, getBoxSpacing } from "../Box/Box.style";
import { PressButton } from "../PressAnimator";
import cssStyle from "./Button.module.css";

export type ButtonProps = {
  full?: boolean;
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
  flex?: string | number;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement> &
  SpacingType;

export const Button = ({
  margin,
  my,
  mx,
  mt,
  mb,
  ml,
  mr,
  padding,
  py,
  px,
  pt,
  pb,
  pl,
  pr,
  full = false,
  color,
  width,
  height,
  radius,
  children,
  disabled = false,
  backgroundColor,
  disabledBgColor,
  disabledTextColor,
  textColor,
  border,
  style = {},
  animate = true,
  flex,
  onClick,
  ...props
}: ButtonProps) => {
  const spacing = getBoxSpacing({
    margin,
    padding,
    my,
    mx,
    mt,
    mb,
    ml,
    mr,
    py,
    px,
    pt,
    pb,
    pl,
    pr
  });

  const disabledStyle = {
    backgroundColor: disabledBgColor,
    color: disabledTextColor,
    cursor: "not-allowed"
  };

  return (
    <PressButton
      animate={animate}
      style={{ width: full ? "100%" : "fit-content", display: "inline-flex", flex }}
    >
      <button
        className={cssStyle.base_button}
        style={{
          width: full ? "100%" : width,
          height,
          borderRadius: radius,
          padding,
          backgroundColor,
          color: textColor,
          border,
          flex,
          ...spacing,
          ...style,
          ...(disabled ? disabledStyle : {})
        }}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </PressButton>
  );
};
