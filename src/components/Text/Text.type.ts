import { HTMLAttributes, ReactNode } from "react";
import { Property } from 'csstype';

type TextAlignType = Property.TextAlign;
type DisPlayType = Property.Display;

export type VariantValueType = {
  size?: number;
  weight?: number;
  lineHeight?: number | string;
  letterSpacing?: number;
  display?: DisPlayType;
  textAlign?: TextAlignType;
  height?: number | string;
} 

export type TextProps = {
  children: string | ReactNode;
  color?: string;
} & VariantValueType & HTMLAttributes<HTMLSpanElement>;

