import MenuHeader from "@/app/_component/Menu/MenuHeader";

import ThemeRadioList from "./_component/ThemeRadioList";

import { AppContainer, Container } from "@/components/Container";

export default function ThemePage() {
  return (
    <AppContainer>
      <Container>
        <MenuHeader>테마</MenuHeader>
        <ThemeRadioList />
      </Container>
    </AppContainer>
  );
}
