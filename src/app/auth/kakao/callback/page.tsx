"use client";

import { useEffect } from "react";
import Loading from "@/app/loading";
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { useRouter } from "next/navigation";
import { authAPI } from "@/api/auth";

export default function KakaoLogin() {
  const [_, setUser] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const kakaoCode = searchParams.get("code");

    /** Next Server **/
    const fetchData = async () => {
      try {
        const { status, data } = await authAPI.loginWithKakao(kakaoCode);
        if (status === "SUCCESS") {
          const { name, email } = data.info;
          setUser({ name, email });

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
