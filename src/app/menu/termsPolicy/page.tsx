import { Metadata } from "next";

import { TermsPolicyScreen } from "./_component/TermsPolicyScreen";

import { AppBar } from "@/components/AppBar";
import { AppContainer } from "@/components/Container";

export const metadata: Metadata = {
  title: "핀허브 | 약관 및 정책"
};

export default async function TermsOfUsePage() {
  return (
    <AppContainer>
      <AppBar title="약관 및 정책" useLeftBack />
      <TermsPolicyScreen />
    </AppContainer>
  );
}
