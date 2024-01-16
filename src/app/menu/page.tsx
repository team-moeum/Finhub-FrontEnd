'use client'

import Image from 'next/image';
import * as S from './page.style';
import UserIcon from '@/assets/User_cicrle_light.svg';
import{ MenuCard } from '@/components/Card/MenuCard'

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
                <MenuCard svgName='3d_box'>Text</MenuCard>
                <MenuCard svgName='Book_open'>Text</MenuCard>
                <MenuCard svgName='Chart'>Text</MenuCard>
                <MenuCard svgName='Date_range'>Text</MenuCard>
                <MenuCard svgName='Folder'>Text</MenuCard>
            </S.totalMenuList>
        </S.container>
    )
}