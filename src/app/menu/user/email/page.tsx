import { Suspense } from "react";

import Loading from "@/app/loading";

import UpdateEmail from "./_component/UpdateEmail";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export default function NamePage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="이메일 설정" />
      <Container>
        <Suspense fallback={<Loading />}>
          <UpdateEmail />
        </Suspense>
      </Container>
    </AppContainer>
  );
}
