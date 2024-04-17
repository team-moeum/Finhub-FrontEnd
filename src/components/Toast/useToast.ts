import { toastTextState } from '@/states/client/atoms/toastText';
import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';

export const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [_, setToastText] = useRecoilState<string>(toastTextState);

  const showToast = useCallback(({text, duration=3000} : {text?: string, duration?: number}) => {
    if (text) setToastText(text);
    if (isToastVisible) return;

    setIsToastVisible(true);

    const timer = setTimeout(() => {
      setIsToastVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isToastVisible]);

  return { isToastVisible, showToast };
};
