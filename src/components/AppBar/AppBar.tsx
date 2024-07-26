"use client";

import React, { ReactNode } from "react";
import { Box } from "../Box";
import { FlexRow } from "../FlexRow";
import { Container } from "../Container";
import { FlexBox } from "../FlexBox";

import ArrowBackIcon from '@/public/icons/icon_arrow_white_back.svg';
import ArrowBackBlackIcon from '@/public/icons/arrow_back_black.svg';
import { Text } from "../Text";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { SafeArea } from "@/app/_component/SafeArea";

type AppBarProps = {
  fixed?: boolean;
  title?: string;
  onBackPress?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  useLeftBack?: boolean;
  leftBackColor?: 'black' | 'white',
  scrolledTitle?: ReactNode;
  backgroundColor?: string;
  scrollThreshold?: number;
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
  fixed = true,
  title,
  onBackPress,
  children,
  useLeftBack = false,
  leftBackColor = 'black',
  backgroundColor = '#fff',
  scrollThreshold,
  style,
}: AppBarProps) => {
  const scrollPosition = useScrollPosition();

  const opacity = scrollPosition < (scrollThreshold || 160) ? 0 : 1;
  const scrolledBackgroundColor = `rgba(255, 255, 255, ${opacity})`;

  return (
    <Box
      position={fixed ? 'fixed' : 'relative'}
      top={0}
      left={0}
      right={0}
      backgroundColor={fixed && backgroundColor === 'transparent' ? scrolledBackgroundColor : backgroundColor}
      zIndex={40}
      style={{ transition: 'background 0.3s ease-in-out', ...style }}
    >
      <SafeArea />
      <Box height={54}>
        <Container width='100%' height='100%' position='relative'>
          <FlexRow width='100%' height='100%' alignItems='center'>
            {useLeftBack 
              ? <FlexBox
                  display="flex"
                  alignItems='center'
                  justifyContent="center"
                >
                  <BackButton onClick={onBackPress} color={leftBackColor} />
                </FlexBox>
              : <Box />
            }
            {title &&
              <Box position='absolute' left={0} width='100%' height='100%' style={{ pointerEvents: 'none' }}>
                <FlexBox height='100%'>
                  <Text size={16} weight={500} color="#525252">{title}</Text>
                </FlexBox>
              </Box>
            }
            <Box>
              <FlexBox gap={24}>
                {children}
              </FlexBox>
            </Box>
          </FlexRow>
        </Container>
      </Box>
    </Box>
  );
}