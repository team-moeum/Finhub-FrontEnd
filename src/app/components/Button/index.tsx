'use client'

import React from 'react';
import Ripple from './Ripple';
import { ButtonContiner, ButtonWrap } from './styles/Button.styled';

export type ButtonProps = {
    type?: "text" | "contained" | "outlined";
    width?: string | number;
    height?: string | number;
    disabled?: boolean
    animate?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
    ripple?: boolean
    onClick?: (e?:React.MouseEvent<HTMLButtonElement>) => void 
}

export const Button = ({ 
    type = "contained",
    width,
    height,
    style={}, 
    children, 
    ripple, 
    onClick, 
    ...props 
    }: ButtonProps) => {

    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        setTimeout(()=> {
            if (onClick) onClick(e);
        }, 200)
    }

    return (
    <ButtonContiner>
        <ButtonWrap className={type} onClick={handleOnClick} style={{width, height, ...style}} {...props}>
            {ripple ? <Ripple color={"#666"} duration={600} /> : undefined}
            {children}
        </ButtonWrap>
    </ButtonContiner>
    );
};

export default Button
