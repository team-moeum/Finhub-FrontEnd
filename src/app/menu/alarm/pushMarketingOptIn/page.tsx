import { Suspense } from "react";

import Loading from "@/app/loading";

import { PushMarketingOptInPageScreen } from "../_component/PushMarketingOptInPageScreen";

import { AppBar } from "@/components/AppBar";
import { AppContainer } from "@/components/Container";

export default function PushMarketingOptInPage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="마케팅 정보 수신 동의" />
      <Suspense fallback={<Loading />}>
        <PushMarketingOptInPageScreen />
      </Suspense>
    </AppContainer>
  );
}
