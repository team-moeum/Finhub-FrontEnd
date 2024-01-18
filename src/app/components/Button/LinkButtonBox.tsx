'use client';

import { useFHRouter } from '@/app/utils/useFHRouter';
import React from 'react';
import ButtonBox, { ButtonBoxProps } from './ButtonBox';
import { LinkButtonContiner } from './styles/Button.styled';

type LinkButtonProps = {
    href: string
} & ButtonBoxProps

const LinkButtonBox = ({
    href,
    children,
    ...props 
    }: LinkButtonProps) => {
    const router = useFHRouter();

    const handleRouter = (e:React.MouseEvent) => {
        e.preventDefault();
        router.push(href);
    }

    return (
    <LinkButtonContiner onClick={handleRouter}>
        <ButtonBox {...props}>
            {children}
        </ButtonBox>
    </LinkButtonContiner>
    );
};

export default LinkButtonBox