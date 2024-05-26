import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { ToastType, toastState } from '@/states/client/atoms/toast';

export const useToast = () => {
  const setToastText = useSetRecoilState<ToastType>(toastState);

  const showToast = useCallback(({content, type, duration=3000, ...props}: ToastType) => {
    setToastText({content, type, duration, ...props});
  }, []);

  return { showToast };
};
