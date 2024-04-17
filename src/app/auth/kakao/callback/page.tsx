"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Loading from "@/app/loading";
import { authAPI } from "@/api/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";

export default function KakaoLogin() {
  const router = useRouter();
  const [_, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const kakaoCode = searchParams.get("code");

    /** Next Server **/
    const fetchData = async () => {
      try {
        const { status, data } = await authAPI.loginWithKakao(kakaoCode);
        if (status === "SUCCESS") {
          setUserInfo(data.info);

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
