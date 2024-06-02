import React, { ReactNode } from "react";
import { Box } from "../Box";
import { FlexRow } from "../FlexRow";
import { Container } from "../Container";
import { FlexBox } from "../FlexBox";

import ArrowBackIcon from '@/public/icons/icon_arrow_white_back.svg';
import ArrowBackBlackIcon from '@/public/icons/arrow_back_black.svg';

type AppBarProps = {
  fixed?: boolean;
  onBackPress?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  useLeftBack?: boolean;
  leftBackColor?: 'black' | 'white',
  scrolledTitle?: ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
};

const BackButton = ({ onClick, color }: { onClick?: React.MouseEventHandler<HTMLButtonElement>, color: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      window.history.back();
    }
  };

  return (
    <button onClick={(e) => handleClick(e)}>
      {color === 'white'
        ? <ArrowBackIcon />
        : <ArrowBackBlackIcon />
      }
    </button>
  )
}

export const AppBar = ({
  fixed=true,
  onBackPress,
  children,
  useLeftBack = false,
  leftBackColor = 'white',
  backgroundColor = 'transparent',
  style,
}: AppBarProps) => {
  return (
    <Box
      height={54}
      position={fixed ? 'fixed' : 'absolute'}
      left={0}
      right={0}
      backgroundColor={backgroundColor}
      zIndex={40}
      style={{ ...style }}
    >
      <Container width='100%' height='100%'>
        <FlexRow width='100%' height='100%' alignItems='flex-end'>
          {useLeftBack && (
            <FlexBox
              display="flex"
              alignItems='center'
              justifyContent="center"
            >
              <BackButton onClick={onBackPress} color={leftBackColor} />
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