import { NotifyScreen } from "./_component/NotifyScreen";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export default function NotifyPage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="알림" />
      <Container mt={20}>
        <NotifyScreen />
      </Container>
    </AppContainer>
  );
}
