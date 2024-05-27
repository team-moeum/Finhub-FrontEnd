import dynamic from "next/dynamic";
import MenuHeader from "../../_component/Menu/MenuHeader";
import { AppContainer, Container } from "@/components/Container";

const ScrapContent = dynamic(() => import('./_component/ScrapContent'), {
  ssr: false,
});

export default function ScrapPage() {
  return (
    <AppContainer>
      <Container pb={30}>
        <MenuHeader>스크랩</MenuHeader>
        <ScrapContent />
      </Container>
    </AppContainer>
  )
}