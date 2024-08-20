"use client";

/* eslint-disable @typescript-eslint/no-require-imports */
import { useEffect } from "react";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? "http://localhost:9090"
    : process.env.NEXT_PUBLIC_BASE_URL;

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
