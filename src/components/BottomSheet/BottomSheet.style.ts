import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BackgroundOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0,0,0,0.5);
    z-index: 9998;
`

export const container = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #FFF;
    border-radius: 24px 24px 0 0;
    z-index: 9999;
`

export const header = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const title = styled.div`
    color: #000;
    font-size: 18px;
    font-weight: 700;
`

export const closeBtn = styled.div`
    width: 12px;
    height: 12px;
    transform: translateY(-50%);
`

export const content = styled.div`
    width: 100%
`