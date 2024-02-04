import React from "react";
import { Header } from "@/components/layouts/Header/Header";
import { Main } from "@/components/layouts/Main/Main";
import "@/styles/global.css";
import { MSWComponent } from "./_component/MSWComponent";
import MenuBar from "./_component/MenuBar/MenuBar";

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
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
      </head>
      <body>
        <MSWComponent />
        <Header />
        {children}
        <MenuBar />
      </body>
    </html>
  );
}