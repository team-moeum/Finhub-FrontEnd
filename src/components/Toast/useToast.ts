import { useState, useCallback } from 'react';

export const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = useCallback((duration = 3000) => {
    if (isToastVisible) return;

    setIsToastVisible(true);

    const timer = setTimeout(() => {
      setIsToastVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isToastVisible]);

  return { isToastVisible, showToast };
};
