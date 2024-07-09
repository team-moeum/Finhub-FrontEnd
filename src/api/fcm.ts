"use client";

import { post } from "./client";


const updateFcmToken = async (token: string) => {
  post(
    "/api/v1/main/fcm-token",
    ["updateFcmToken"],
    { token },
  );
};

export const fcmAPI = {
  updateFcmToken,
};
