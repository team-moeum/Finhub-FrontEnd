"use client";

import { AnimatePresence } from "framer-motion";

import { Box } from "../Box";
import * as S from "./Modal.style";
import ModalPortal from "./ModalPortal";

import { ZINDEX } from "@/styles/zIndex";

export type ModalProps = {
  show: boolean;
  onClose?: () => void;
  dim?: boolean;
  leftButtonText?: string;
  rightButtonText?: string;
  children: React.ReactNode;
};

export const Modal = ({ show, onClose, dim = true, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <ModalPortal>
          <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={ZINDEX.modal}>
            {children}
            {dim && (
              <S.BackgroundOverlay
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Box>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};
