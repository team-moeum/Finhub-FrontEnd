import React from "react";
import { Metadata } from "next";
import { AppContainer, Container } from "@/components/Container";
import { AppBar } from "@/components/AppBar";

export const metadata: Metadata = {
  title: "핀허브 | 이용약관",
};

export default async function TermsOfUsePage() {
  return (
    <AppContainer>
      <AppBar title="이용약관" />
      <Container>이용약관 전문</Container>
    </AppContainer>
  );
}
