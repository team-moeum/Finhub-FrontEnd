import styled from '@emotion/styled/types/base';
import React from 'react';
import Ripple from './Ripple';
import { ButtonContiner, ButtonDivWrap } from './styles/Button.styled';

type ButtonBoxProps = {
    type?: "text" | "contained" | "outlined";
    disabled?: boolean
    animate?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
    ripple?: boolean
    onClick?: (e?:React.MouseEvent) => void 
}

const ButtonBox = ({
    type = "contained", 
    style={} , 
    children, 
    ripple, 
    onClick, 
    ...props 
    }: ButtonBoxProps) => {

    const handleOnClick = (e:React.MouseEvent) => {
        setTimeout(()=> {
            if (onClick) onClick(e);
        }, 200)
    }

    return (
    <ButtonContiner>
        <ButtonDivWrap className={type} onClick={handleOnClick} style={{...style}} {...props}>
            {ripple ? <Ripple color={"#666"} duration={600} /> : undefined}
            {children}
        </ButtonDivWrap>
    </ButtonContiner>
    );
};

export default ButtonBox