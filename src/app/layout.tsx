"use client";

import React from "react";
import { Header } from "@/components/layouts/Header/Header";
import { Main } from "@/components/layouts/Main/Main";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/global";

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
        <Global styles={GlobalStyles} />
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
