import { Metadata } from "next";
import React from "react";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "핀허브 | 개인정보처리방침"
};

export default async function PrivacyPage() {
  return (
    <AppContainer>
      <AppBar title="개인정보처리방침" />
      <Container>개인정보처리방침 전문</Container>
    </AppContainer>
  );
}
