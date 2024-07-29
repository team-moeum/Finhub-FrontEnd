import { authAPI } from "@/api/auth";
import { fcmAPI } from "@/api/fcm";
import { isLoggedIn } from "@/utils/auth_client";
import { jsToNative } from "@/utils/jsToNative";
import { useEffect } from "react";
import { usePageHistory } from "./usePageHistory";
import { useSetRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";

/**
 * autoLogin when first enter the web from app 
 */
export const useAutoLogin = () => {
  const { isFirstVisit } = usePageHistory();
  const setUserInfo = useSetRecoilState(userState);

  useEffect(() => {
    if (!isLoggedIn() || !isFirstVisit) return;

    const performAutoLogin = async () => {
      const res = await authAPI.autoLogin();
      
      if (res.status === "FAIL") return;

      setUserInfo(res.data.info);

      jsToNative({ val1: "getPushToken" }, (data: any) => {
        fcmAPI.updateFcmToken(data.detail);
      });
    }

    performAutoLogin();
  }, [isFirstVisit]);
}