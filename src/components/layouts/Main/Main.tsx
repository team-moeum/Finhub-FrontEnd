import { ReactNode } from 'react';
import * as S from './Main.style';

export const Main = ({ children }: { children: ReactNode }) => {
  return <S.container style={{height: "100vh"}}>{children}</S.container>;
};
