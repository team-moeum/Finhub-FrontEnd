'use client'

import Image from 'next/image';
import * as S from './page.style';
import UserIcon from '@/assets/User_cicrle_light.svg';
import{ MenuCard } from '@/components/Card/MenuCard'
import LinkButtonBox from '../components/Button/LinkButtonBox';

export default function Menu() {
    return(
        <S.container>
            <S.myInfo>
                <Image
                    src={UserIcon}
                    alt="UserIcon"
                    width={35}
                    height={35}
                />
                <S.myName>손주형</S.myName>
            </S.myInfo>
            <S.totalMenuList>
                <MenuCard svgName='3d_box' href='/' >Text</MenuCard>
                <MenuCard svgName='Book_open' href='/'>Text</MenuCard>
                <MenuCard svgName='Chart' href='/'>Text</MenuCard>
                <MenuCard svgName='Date_range' href='/'>Text</MenuCard>
                <MenuCard svgName='Folder' href='/'>Text</MenuCard>
            </S.totalMenuList>
        </S.container>
    )
}