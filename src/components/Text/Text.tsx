import { TextProps } from './Text.type';

export const Text = ({ 
  size,
  color, 
  weight, 
  height,
  display,
  textAlign,
  lineHeight, 
  letterSpacing,
  style={},
  children
}: TextProps) => {
  return (
    <span 
      style={{
        color,
        height,
        display,
        textAlign,
        lineHeight,
        letterSpacing,
        fontSize: size,
        fontWeight: weight,
        ...style,
      }}
    >
      {children}
    </span>
  );
}