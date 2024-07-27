import React, { Suspense } from "react";
import "@/styles/global.css";
import "@/styles/public.css";
import "@/styles/reset.css";

import { MSWComponent } from "./_component/MSWComponent";
import MenuBar from "./_component/MenuBar/MenuBar";
import RecoilRootProvider from "./_component/RecoilRootProvider";
import RQProvider from "./_component/RQProvider";
import Loading from "./loading";
import { ToastProvider } from "@/components/Toast/ToastProvider";

import localFont from 'next/font/local';
import { Global } from "@emotion/react";
import { GlobalProvider } from "./_component/GlobalProvider";

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                {children}
              </Suspense>
              <MenuBar />
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
