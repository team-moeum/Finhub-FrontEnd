"use client";

import { jsToNative } from "@/utils/jsToNative";
import { ReactNode, useEffect } from "react";
import { isLoggedIn } from '@/utils/auth_client';
import { fcmAPI } from "@/api/fcm";
import { usePageHistory } from "@/hooks/usePageHistory";


export const GlobalProvider = ({
  children
}: {
  children:ReactNode
}) => {
  const { isFirstVisit } = usePageHistory();

  useEffect(() => {
    if (!isLoggedIn() || !isFirstVisit) return;
    
    jsToNative({ val1: "getPushToken" }, (data: any) => {
      fcmAPI.updateFcmToken(data.detail);
    });
  }, [isFirstVisit]);

  return <>{children}</>;
}