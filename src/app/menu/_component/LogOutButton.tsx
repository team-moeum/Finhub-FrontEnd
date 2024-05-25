"use client";

import { useRouter } from "next/navigation";

import { authAPI } from "@/api/auth";
import { Text } from "@/components/Text";
import { Box } from "@/components/Box";

export default function LogOutButton() {
  const router = useRouter();
  const logout = authAPI.useLogout();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <Box onClick={handleLogout} display='inline'>
      <Text size={12} weight={600} color="#CDD1D5">로그아웃</Text>
    </Box>
  )
}

