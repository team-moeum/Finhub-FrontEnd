"use client";

import { post, remove } from "./client";

const updateFcmToken = async (token: string) => {
  post("/api/v1/main/fcm-token", ["updateFcmToken"], { token });
};

const deleteFcmToken = async () => {
  remove("/api/v1/main/fcm-token", ["deleteFcmToken"]);
};

export const fcmAPI = {
  updateFcmToken,
  deleteFcmToken
};
