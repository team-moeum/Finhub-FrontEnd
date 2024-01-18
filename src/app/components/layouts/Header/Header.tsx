import Link from 'next/link';
import Image from 'next/image';
import * as S from './Header.style';
import { Nav } from '../../../components/Nav/Nav';
import HomeIcon from '@/assets/Home_light.svg';

export const Header = () => {
  return (
    <S.header>
      <S.link>
        <Link href="/">
            <Image
              src={HomeIcon}
              alt="HomeIcon"
              priority
              width={35}
              height={35}
            />
        </Link>
      </S.link>
      <Nav />
    </S.header>
  );
};
