import Link from 'next/link';
import Image from 'next/image';
import * as S from './Nav.style';
import IconButton from '../Button/IconButton';

export const Nav = () => {
    return (
        <S.container>
            <ul>
                <li>
                    <Link href={`/search`}>
                        <Image
                            priority
                            alt="search"
                            src="/search-icon.svg"
                            width={20}
                            height={20}
                        />
                    </Link>
                </li>
                <li>
                    <Link href={`/menu`}>
                        <IconButton type="text" animate ripple>
                            <Image
                                    priority
                                    alt="menu"
                                    src="/menu-icon.svg"
                                    width={20}
                                    height={20}
                                />
                        </IconButton>
                    </Link>
                </li>
            </ul>
        </S.container>
    );
};