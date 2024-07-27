"use client";

import { FHEventBus } from "@/utils/jsToNative";
import { ReactNode, useEffect } from "react";

export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  useEffect(() => {
    const eventBus = new FHEventBus();

    eventBus.on('getPushToken', (e) => {});
  }, []);

  return <>{children}</>;
}