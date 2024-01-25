import styled from '@emotion/styled/types/base';
import React from 'react';
import Ripple from './Ripple';
import { ButtonContiner, ButtonDivWrap } from './styles/Button.styled';

export type ButtonBoxProps = {
    type?: "text" | "contained" | "outlined"
    width?: string | number
    height?: string | number
    background?: string
    disabled?: boolean
    animate?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
    ripple?: boolean
    rippleColor?: string
    onClick?: (e?:React.MouseEvent) => void 
}

const ButtonBox = ({
    type = "text",
    width,
    height,
    background,
    style={}, 
    children, 
    ripple,
    rippleColor="#666", 
    onClick, 
    ...props 
    }: ButtonBoxProps) => {

    const handleOnClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setTimeout(()=> {
            if (onClick) onClick(e);
        }, 200)
    }

    return (
    <ButtonContiner>
        <ButtonDivWrap className={type} onClick={handleOnClick} style={{width, height, background, ...style}} {...props}>
            {ripple ? <Ripple color={rippleColor} duration={600} /> : undefined}
            {children}
        </ButtonDivWrap>
    </ButtonContiner>
    );
};

export default ButtonBox