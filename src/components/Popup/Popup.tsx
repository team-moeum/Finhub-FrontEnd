"use client";

import { motion } from 'framer-motion';
import { Box } from '../Box';
import { Button } from '../Button';
import { Container } from '../Container';
import { FlexRow } from '../FlexRow';
import { Modal, ModalProps } from '../Modal/Modal';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { FlexBox } from '../FlexBox';
import { useLockScroll } from '@/hooks/useLockScroll';

type PopupProps = {
  leftButtonText?: string,
  rightButtonText?: string,
  onLeftClick?: () => void,
  onRightClick?: () => void,
  children: React.ReactNode
} & ModalProps;

export const Popup = ({
  show,
  onClose,
  dim = true,
  leftButtonText,
  rightButtonText,
  onLeftClick,
  onRightClick,
  children
}: PopupProps) => {

  useLockScroll({locked: show});

  return (
    <Modal show={show} dim={dim} onClose={onClose}>
      <motion.div
        initial={{ y: "100vh"}}
        animate={{ y: "0"}}
        exit={{ y: "100vh"}}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{width: "100%", height: "calc(100% - 54px)", display: "flex", pointerEvents: 'none', position: 'fixed', zIndex: 1}}
      >
        <Container width='100%' variant='thick' margin='auto' style={{pointerEvents: 'auto'}}>
          <Box px={16} py={20} backgroundColor='#FFF' radius={20}>
            <Stack gap={32} pt={16}>
              <Text size={15} weight={600} color='#191B1C' display='block'>
                <FlexBox>
                  {children}
                </FlexBox>
              </Text>
              <FlexRow gap={8}>
                <Button
                  height={35}
                  backgroundColor='#EDF0F3'
                  radius={5}
                  flex={1}
                  onClick={onLeftClick}
                >
                  <Text size={14} weight={600} color='#7B8287'>
                    {leftButtonText}
                  </Text>
                </Button>
                <Button
                  height={35}
                  backgroundColor='rgba(232, 59, 59, 0.70)'
                  radius={5}
                  flex={1}
                  onClick={onRightClick}
                >
                  <Text size={14} weight={600} color='#FFFFFF'>
                    {rightButtonText}
                  </Text>
                </Button>
              </FlexRow>
            </Stack>
          </Box>
        </Container>

      </motion.div>
    </Modal>
  )
}