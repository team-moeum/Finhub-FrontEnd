import dynamic from "next/dynamic";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

const ScrapComment = dynamic(() => import("./_component/ScrapComment"), {
  ssr: false
});

export default function ScrapPage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="내가 쓴 댓글" />
      <Container pb={30}>
        <ScrapComment />
      </Container>
    </AppContainer>
  );
}
