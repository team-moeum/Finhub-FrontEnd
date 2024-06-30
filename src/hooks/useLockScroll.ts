import { useLayoutEffect } from "react";

const LockElementSroll = (el?: HTMLElement) => {
  if (el) {
    el.style.overflow = 'hidden';
    return;
  }

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

const unLockElementScroll = (el?: HTMLElement) => {
  if (el) {
    el.style.overflow = "";
    return;
  }

  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}

export const useLockScroll = ({locked, element}: {locked: boolean, element?: HTMLElement}) => {
  useLayoutEffect(() => {
    if (locked) LockElementSroll(element);
    else unLockElementScroll(element);

    return () => {
      unLockElementScroll(element);
    };
  }, [locked, element]);
};