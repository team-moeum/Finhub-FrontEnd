import { useEffect, useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { historyPathsState } from '@/states/client/atoms/history';

export const usePageHistory = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [historyPaths, setHistoryPathsState] = useRecoilState(historyPathsState);

  useEffect(() => {
    setHistoryPathsState((prev: string[]) => [...prev, pathname + searchParams.toString()]);
  }, [pathname, searchParams, setHistoryPathsState]);

  return { isFirstVisit: !historyPaths.length, historyPaths };
};