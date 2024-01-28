"use client";

import { useFHRouter } from "@/utils/useFHRouter";
import React from "react";
import ButtonBox, { ButtonBoxProps } from "./ButtonBox";
import { LinkButtonContiner } from "./styles/Button.styled";

type LinkButtonProps = {
  href: string;
  width?: string | number;
  height?: string | number;
} & ButtonBoxProps;

const LinkButton = ({ href, children, width, height, ...props }: LinkButtonProps) => {
  const router = useFHRouter();

  const handleRouter = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <LinkButtonContiner onClick={handleRouter} style={{width, height}}>
      <ButtonBox width={width} height={height} {...props}>{children}</ButtonBox>
    </LinkButtonContiner>
  );
};

export default LinkButton;
