import { Property } from "csstype";
import { LegacyRef, forwardRef } from "react";

import { SpacingType, getBoxSpacing } from "./Box.style";

type DisPlayType = Property.Display;
type PositionType = Property.Position;

export type BoxProps = {
  display?: DisPlayType;
  position?: PositionType;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  backgroundColor?: string;
  boxShadow?: string;
  border?: string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
} & SpacingType &
  React.HTMLAttributes<HTMLDivElement>;

export const Box = forwardRef(
  (
    {
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
      width,
      height,
      radius,
      backgroundColor,
      boxShadow,
      border,
      display,
      position,
      top,
      right,
      bottom,
      left,
      zIndex,
      style = {},
      children,
      ...props
    }: BoxProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
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

    return (
      <div
        ref={ref}
        style={{
          width,
          height,
          backgroundColor,
          borderRadius: radius,
          margin,
          padding,
          boxShadow,
          border,
          display,
          position,
          top,
          right,
          bottom,
          left,
          zIndex,
          ...spacing,
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";
