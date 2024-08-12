import { CSSProperties } from "react";

export type SpacingType = {
  margin?: string | number;
  padding?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
};

export const getBoxSpacing = ({
  margin,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  padding,
  px,
  py,
  pt,
  pb,
  pl,
  pr
}: SpacingType) => {
  const spacingStyle: CSSProperties = {
    marginTop: margin ?? mt ?? my,
    marginBottom: margin ?? mb ?? my,
    marginLeft: margin ?? ml ?? mx,
    marginRight: margin ?? mr ?? mx,
    paddingTop: padding ?? pt ?? py,
    paddingBottom: padding ?? pb ?? py,
    paddingLeft: padding ?? pl ?? px,
    paddingRight: padding ?? pr ?? px
  };

  return spacingStyle;
};
