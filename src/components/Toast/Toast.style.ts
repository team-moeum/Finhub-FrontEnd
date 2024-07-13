import { ZINDEX } from '@/styles/zIndex';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ToastWrap = styled(motion.div)`
    position: fixed;
    bottom: 88px;
    left: 0;
    right: 0;
    pointer-events: none;
    z-index: ${ZINDEX.toast};
`

export const ToastContent = styled.div`
    margin: 0 auto;
    margin-right:16px;
    margin-left:16px;
    width: calc(100%-32px);
    background-color: #25292C;
    border-radius: 10px;
    padding: 15px 20px;

    font-size: 16px;
    font-weight: 500;
    color: #FFF;
    line-height: 21px;
`