import React from "react";
import styled from "@emotion/styled";
import Button, { ButtonProps } from ".";

const IconButtonWrap = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;

    svg {
        width: 100;
        height: 100;
    }
`

type IconButtonTypes = {
    children: React.ReactNode
} & ButtonProps

const IconButton = ({children, ...props} : IconButtonTypes) => {
    return (
        <Button {...props}>
            <IconButtonWrap>
                {children}
            </IconButtonWrap>
        </Button>
    );
};

export default IconButton