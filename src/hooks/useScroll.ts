import { useCallback, useEffect, useState } from "react";

interface ScrollOptions {
  threshold?: number;
}

export const useScrollBottom = ({ threshold = 0 }: ScrollOptions = {}) => {
  const [isBottom, setIsBottom] = useState(false);

  const checkIsBottom = useCallback(() => {
    const element = document.documentElement;
    if (!element) return;

    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;

    setIsBottom(scrollTop + innerHeight >= scrollHeight - threshold);
  }, [threshold]);

  const scrollToBottom = useCallback(() => {
    const element = document.documentElement;
    if (!element) return;

    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkIsBottom();
    };
    window.addEventListener("scroll", handleScroll);
    checkIsBottom();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkIsBottom]);

  return { isBottom, scrollToBottom };
};
