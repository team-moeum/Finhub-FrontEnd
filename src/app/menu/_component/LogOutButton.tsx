"use client";

import { useRouter } from "next/navigation";

import { Text } from "@/components/Text";
import { Box } from "@/components/Box";
import { useResetRecoilState } from "recoil";
import { userState } from "@/states/client/atoms/user";
import { deleteToken } from "@/utils/auth_client";
import { fcmAPI } from "@/api/fcm";

export default function LogOutButton() {
  const router = useRouter();
  const resetUserInfo = useResetRecoilState(userState);

  const handleLogout = async() => {
    await fetch('/api/auth/logout', { method: 'GET' });
    await fcmAPI.deleteFcmToken();
    deleteToken();
    resetUserInfo();

    router.refresh();
  };

  return (
    <Box onClick={handleLogout} display='inline'>
      <Text size={12} weight={600} color="#CDD1D5">로그아웃</Text>
    </Box>
  )
}

