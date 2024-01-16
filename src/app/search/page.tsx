'use client'

import Image from 'next/image';
import * as S from './page.style';

export default function Search() {
    return(
        <S.container>
            <S.inputWarp>
                <Image
                    priority
                    alt="search"
                    src="/search-icon.svg"
                    width={28}
                    height={28}
                />
                <S.input />
            </S.inputWarp>
            <S.result>
                <S.resultInit>
                    <p>어떤 정보를 찾아드릴까요?</p>
                    <p>모르는 금융 용어 및 정보를 검색해 볼 수 있어요.</p>
                </S.resultInit>
            </S.result>
        </S.container>
    )
}
