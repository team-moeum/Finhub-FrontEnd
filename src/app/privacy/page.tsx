import React from "react";
import { Metadata } from "next";
import { AppContainer, Container } from "@/components/Container";
import { AppBar } from "@/components/AppBar";

export const metadata: Metadata = {
  title: "핀허브 | 개인정보처리방침",
};

export default async function PrivacyPage() {
  return (
    <AppContainer>
      <AppBar title="개인정보처리방침" />
      <Container>개인정보처리방침 전문</Container>
    </AppContainer>
  );
}
