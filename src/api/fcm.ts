"use client";

import { fetchApi } from "./fetchApi";

const updateFcmToken = async (token: string) => {
  fetchApi({
    method: "POST",
    path: "/api/v1/main/fcm-token",
    body: { token },
  });
};

export const fcmAPI = {
  updateFcmToken,
};
