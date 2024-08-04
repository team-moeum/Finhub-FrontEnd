"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Loading from "@/app/loading";
import { authAPI } from "@/api/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { jsToNative } from "@/utils/jsToNative";
import { fcmAPI } from "@/api/fcm";

export default function AppleLogin() {
  const router = useRouter();
  const [_, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const code = searchParams.get("code");

    /** Next Server **/
    const fetchData = async () => {
      try {
        const { status, data } = await authAPI.loginWithApple(code);
        if (status === "SUCCESS") {
          setUserInfo(data.info);

          jsToNative({ val1: "getPushToken" }, (data: any) => {
            fcmAPI.updateFcmToken(data.detail);
          });

          router.push("/home");
        } else {
          console.log("Fail");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <Loading />;
}
