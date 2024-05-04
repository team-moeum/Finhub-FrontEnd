import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ToastWrap = styled(motion.div)`
    position: fixed;
    bottom: 63px;
    left: 0;
    right: 0;
    pointer-events: none;
`

export const ToastContent = styled.div`
    margin: 0 auto;
    width: 328px;
    background-color: #7B8287;
    border-radius: 14px;
    padding: 15px 20px;

    font-size: 16px;
    color: #FFF;
    line-height: 21px;
`