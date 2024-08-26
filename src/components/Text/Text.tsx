import { TextProps } from "./Text.type";
import { getTextOverflowStyle } from "./textUtils";

export const Text = ({
  size,
  color,
  weight,
  height,
  display,
  textAlign,
  lineHeight,
  letterSpacing,
  textLineClamp,
  style = {},
  children,
  ...props
}: TextProps) => {
  let combinedStyle = {
    color,
    height,
    display,
    textAlign,
    lineHeight,
    letterSpacing,
    fontSize: size,
    fontWeight: weight,
    ...style
  };

  if (textLineClamp) {
    combinedStyle = { ...combinedStyle, ...getTextOverflowStyle(textLineClamp) };
  }

  return (
    <span style={combinedStyle} {...props}>
      {children}
    </span>
  );
};
