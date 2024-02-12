import React from "react";
import "@/styles/global.css";
import { MSWComponent } from "./_component/MSWComponent";
import MenuBar from "./_component/MenuBar/MenuBar";
import RecoilRootProvider from "./_component/RecoilRootProvider";

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
      <body>
        <RecoilRootProvider>
          <MSWComponent />
          {children}
          <MenuBar />
        </RecoilRootProvider>
      </body>
    </html>
  );
}
