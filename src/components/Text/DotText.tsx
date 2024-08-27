import { Text } from "./Text";
import { TextProps } from "./Text.type";

type DotTextProps = {
  color?: string;
  size?: number;
  spacing?: number;
} & TextProps;

export const DotText = ({ size, color, spacing = 10, ...props }: DotTextProps) => {
  return (
    <Text
      style={{
        position: "relative",
        display: "block",
        paddingLeft: spacing,
        fontSize: size,
        color
      }}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          width: spacing,
          top: -1,
          left: 0,
          fontSize: size,
          color
        }}
      >
        •
      </div>
      {props.children}
    </Text>
  );
};
