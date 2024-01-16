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
                <MenuCard svgName='Home_light'>Text</MenuCard>
            </S.totalMenuList>
        </S.container>
    )
}