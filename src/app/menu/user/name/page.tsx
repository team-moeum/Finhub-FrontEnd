import { Suspense } from "react";

import Loading from "@/app/loading";

import UpdateNickName from "./_component/UpdateNickName";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export default function NamePage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="닉네임 설정" />
      <Container>
        <Suspense fallback={<Loading />}>
          <UpdateNickName />
        </Suspense>
      </Container>
    </AppContainer>
  );
}
