import { useRouter } from "next/navigation";
import { ApiResponse, client } from "./client";
import { storageAPI } from "@/utils/localStorage";

const loginWithKakao = async (kakaoCode: string | null) => {
  const response: ApiResponse = await client.get({
    host: window.location.origin,
    url: `/api/auth/kakao?code=${kakaoCode}`,
  });

  storageAPI.set("access-token", response.data.token.accessToken);
  storageAPI.set("refresh-token", response.data.token.refreshToken);

  return response;
};

const autoLogin = async () => {
  const response: ApiResponse = await client.post({
    host: window.location.origin,
    url: "/api/auth/autoLogin",
    body: {},
  });

  storageAPI.set("access-token", response.data.token.accessToken);
  storageAPI.set("refresh-token", response.data.token.refreshToken);

  return response;
};

const useLogout = async () => {
  await client.post({
    host: window.location.origin,
    url: "/api/auth/logout",
    body: {},
  });

  const router = useRouter();
  storageAPI.remove("access-token");
  storageAPI.remove("refresh-token");
  router.refresh();
};

export const authAPI = {
  loginWithKakao,
  autoLogin,
  useLogout,
};
