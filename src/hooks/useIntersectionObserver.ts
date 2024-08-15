import { useCallback, useState } from "react";

type UseIntersectionObserverType = {
  threshold?: number;
  root?: Element | Document | null;
  rootMargin?: string;
  initialIsIntersecting?: boolean;
};

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  initialIsIntersecting = false
}: UseIntersectionObserverType) => {
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null) {
        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
          observer.disconnect();
        };
      }
    },
    [threshold, root, rootMargin]
  );

  return {
    ref,
    isIntersecting
  };
};
