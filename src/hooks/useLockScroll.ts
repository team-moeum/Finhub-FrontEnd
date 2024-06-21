import { useLayoutEffect } from "react";

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