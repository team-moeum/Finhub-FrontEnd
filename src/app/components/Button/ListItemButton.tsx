import React from "react";
import styled from "@emotion/styled";
import ButtonBox from "./ButtonBox";

const ListItemButtonWarp = styled.div<{columns : number}>`
    display: grid;
    grid-template-columns:
        ${(props) => props.columns && props.columns > 2 ? 
        `auto 1fr repeat(${props.columns - 2}, auto)` : 
        'auto 1fr'};
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 15px
`

type ListItemButtonTypes = {
    width?: string | number,
    height?: string | number,
    children: React.ReactNode,
    style?: React.CSSProperties,
}

const ListItemButton = ({width, height, children, style} : ListItemButtonTypes) => {
    const childCount = React.Children.count(children);

    return(
        <ButtonBox type='text' animate ripple>
            <ListItemButtonWarp style={{width, height, ...style}} columns={childCount}>
                {children}
            </ListItemButtonWarp>
        </ButtonBox>
    );
};


export default ListItemButton;