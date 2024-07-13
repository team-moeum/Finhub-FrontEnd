import dynamic from "next/dynamic";
import MenuHeader from "../../_component/Menu/MenuHeader";
import { AppContainer, Container } from "@/components/Container";

const ScrapComment = dynamic(() => import('./_component/ScrapComment'), {
  ssr: false,
});

export default function ScrapPage() {
  return (
    <AppContainer>
      <Container pb={30}>
        <MenuHeader>내가 쓴 댓글</MenuHeader>
        <ScrapComment />
      </Container>
    </AppContainer>
  )
}