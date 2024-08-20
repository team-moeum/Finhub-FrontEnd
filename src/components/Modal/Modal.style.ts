import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BackgroundOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0,0,0,0.5);
`;
