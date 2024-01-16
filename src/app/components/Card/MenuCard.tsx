'use client'

import Image from "next/image";
import React from "react";
import ListItemButton from "../Button/ListItemButton";

type MenuCardProps = {
    svgName: string,
    children?: React.ReactNode,
}

export const MenuCard = ({svgName, children} : MenuCardProps) => {
    return(
        <ListItemButton width='100%' height={54}>
            <Image
                src={`/${svgName}.svg`}
                alt={svgName}
                width={35}
                height={35}
            />
            <div>{children}</div>
        </ListItemButton>
    );
};