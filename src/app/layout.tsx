import localFont from "next/font/local";
import React, { Suspense } from "react";

import AppLayout from "./_component/AppLayout/AppLayout";
import { GlobalProvider } from "./_component/GlobalProvider";
import { MSWComponent } from "./_component/MSWComponent";
import MenuBar from "./_component/MenuBar/MenuBar";
import RQProvider from "./_component/RQProvider";
import RecoilRootProvider from "./_component/RecoilRootProvider";
import Loading from "./loading";

import "@/styles/global.css";
import "@/styles/public.css";
import "@/styles/reset.css";

import { ToastProvider } from "@/components/Toast/ToastProvider";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </head>
      <body className={pretendard.className}>
        <RecoilRootProvider>
          <RQProvider>
            <MSWComponent />
            <GlobalProvider>
              <Suspense fallback={<Loading />}>
                <AppLayout>{children}</AppLayout>
              </Suspense>
              <ToastProvider />
            </GlobalProvider>
          </RQProvider>
        </RecoilRootProvider>
        <div id="toast-portal" />
        <div id="modal-portal" />
      </body>
    </html>
  );
}
