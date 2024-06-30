import { useEffect, useLayoutEffect, useRef } from "react";

const LockElementSroll = (el?: HTMLElement) => {
  if (el) {
    el.style.overflow = 'hidden';
    return;
  }

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

const unLockElementScroll = (originalOverflow: {html: string, body: string, element: string}, el?: HTMLElement) => {
  if (el) {
    el.style.overflow = originalOverflow.element || "";
    return;
  }

  document.body.style.overflow = originalOverflow.body;
  document.documentElement.style.overflow = originalOverflow.html;
}

export const useLockScroll = ({locked, element}: {locked: boolean, element?: HTMLElement}) => {
  useLayoutEffect(() => {
    const originalOverflow = {
      html: window.getComputedStyle(document.documentElement).overflow,
      body: window.getComputedStyle(document.body).overflow,
      element: element ? window.getComputedStyle(element).overflow : ""
    }

    if (locked) LockElementSroll(element);
    else unLockElementScroll(originalOverflow, element);

    return () => {
      unLockElementScroll(originalOverflow, element);
    };
  }, [locked, element]);
};

export const useClearLockScroll = () => {
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const modalPortal = document.getElementById('modal-portal');

    if (!modalPortal) return;

    const checkAndClearLockScroll = () => {
      if (modalPortal.childElementCount === 0) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };

    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          checkAndClearLockScroll();
        }
      });
    });

    observerRef.current.observe(modalPortal, { childList: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};