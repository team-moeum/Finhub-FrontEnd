import Link from 'next/link';
import * as S from './Nav.style';

export const Nav = () => {
    return (
        <S.container>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Home</Link></li>
            </ul>
        </S.container>
    );
};