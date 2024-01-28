'use client'

import Image from "next/image";
import React from "react";
import LinkButton from "../Button/LinkButton";
import * as S from "./MenuCard.style"

type MenuCardProps = {
    svgName: string,
    href: string,
    children?: React.ReactNode,
}

export const MenuCard = ({svgName, href, children} : MenuCardProps) => {
    return(
        <LinkButton width='100%' height={54} href={href} animate ripple>
            <S.container>
                <Image
                    src={`/${svgName}.svg`}
                    alt={svgName}
                    width={35}
                    height={35}
                />
                <div>{children}</div>
                <Image
                    src={`/Arrow_right.svg`}
                    alt="Arrow_right"
                    width={28}
                    height={28}
                />
            </S.container>
        </LinkButton>
    );
};