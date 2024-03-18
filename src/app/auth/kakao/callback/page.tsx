"use client";

import { useEffect } from "react";
import Loading from "@/app/loading";
import { useRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { useRouter } from 'next/navigation'
import { getToken } from "@/utils/auth";

export default function KakaoLogin() {
    const [, setUser] = useRecoilState(userState);
    const router = useRouter();

    useEffect(() => {
        const kakaoCode = new URL(window.location.href).searchParams.get('code')

        /** Next Server **/
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/auth/kakao?code=${kakaoCode}`, {method: 'GET'});
                const res = await response.json();
                console.log(response, res)
                if (res.status === "SUCCESS") {
                    const {name, email} = res.data;
                    const userInfo = {name: name, email: email}
                    setUser(userInfo);

                    router.push("/home");
                } else {
                    console.log("Fail");
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();

        function autoLogin() {
            fetch(`/api/auth/autoLogin`, 
            { 
              method: 'GET',
            })
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log("Auto Login: ", data);
            });
          }

          autoLogin();
    }, [])

    return <Loading margin="50% auto"/>
}