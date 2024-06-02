import React, { ReactNode } from "react";
import { Box } from "../Box";
import { FlexRow } from "../FlexRow";
import { Container } from "../Container";
import { FlexBox } from "../FlexBox";

import ArrowBackIcon from '@/public/icons/icon_arrow_white_back.svg';

type AppBarProps = {
  onBackPress?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  useLeftBack?: boolean;
  scrolledTitle?: ReactNode;
  backgroundColor?: string;
  style?:React.CSSProperties;
};

const BackButton = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      window.history.back();
    }
  };
  
  return (
    <button onClick={(e) => handleClick(e)}>
      <ArrowBackIcon />
    </button>
  )
}

export const AppBar = ({ 
  onBackPress, 
  children, 
  useLeftBack = false, 
  backgroundColor='transparent',
  style,
}: AppBarProps) => {
  return (
    <Box
      height={54}
      position='fixed'
      left={0}
      right={0}
      backgroundColor={backgroundColor} 
      zIndex={40}
      style={{...style}}
    >
      <Container width='100%' height='100%'>
        <FlexRow width='100%' height='100%' alignItems='flex-end'>
            {useLeftBack && (
              <FlexBox
                display="flex"
                alignItems='center'
                justifyContent="center"
              >
                <BackButton onClick={onBackPress} />
              </FlexBox>
            )}
          <Box>
            <FlexBox gap={24}>
              {children}
            </FlexBox>
          </Box>
        </FlexRow>
      </Container>
    </Box>
  );
}