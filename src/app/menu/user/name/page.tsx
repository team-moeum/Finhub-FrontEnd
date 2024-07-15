import { Suspense } from "react";
import UpdateNickName from "./_component/UpdateNickName";
import Loading from "@/app/loading";
import { AppContainer, Container } from "@/components/Container";
import { AppBar } from "@/components/AppBar";

export default function NamePage() {
  return (
    <AppContainer>
      <AppBar
        useLeftBack
        title="닉네임 설정"
      />
      <Container>
        <Suspense fallback={<Loading />}>
          <UpdateNickName />
        </Suspense>
      </Container>  
    </AppContainer>
  )
}