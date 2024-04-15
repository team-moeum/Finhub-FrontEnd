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
    padding: 16px 18px;

    font-size: 14px;
    color: #FFF;
    line-height: 21px;
`

export const ScrapToastWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`

export const ScrapToastTextBox = styled.div`
    flex: 1;
`

export const ScrapToastButton = styled.button`
    width: 70px;
    height: 35px;
    border-radius: 6px;
    background-color: #494F54;
    font-size: 12px;
    font-weight: 700;
    color: #FFF;
    pointer-events: auto;

`