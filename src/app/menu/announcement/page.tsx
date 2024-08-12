import { AnnouncementList } from "./_component/AnnouncementList";

import { AppBar } from "@/components/AppBar";
import { AppContainer, Container } from "@/components/Container";

export default async function AnnouncementPage() {
  return (
    <AppContainer>
      <AppBar useLeftBack leftBackColor="black" title="공지사항" />
      <Container>
        <AnnouncementList />
      </Container>
    </AppContainer>
  );
}
