import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";
import { WithdrawPageScreen } from "./_component/WithdrawPageScreen";
import { Suspense } from "react";
import Loading from "@/app/loading";

export const dynamic = "force-dynamic";

export default function WitdrawPage() {
  return (
    <AppContainer>
      <AppBar
        useLeftBack
        title="탈퇴하기"
      />
      <Container mt={20}>
        <Suspense fallback={<Loading />}>
          <WithdrawPageScreen />
        </Suspense>
      </Container>
    </AppContainer>
  )
}