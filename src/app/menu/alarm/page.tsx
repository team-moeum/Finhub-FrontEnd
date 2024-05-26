import { Text } from "@/components/Text";
import { Stack } from "@/components/Stack";
import { AppContainer, Container } from "@/components/Container";

import PushItem from "./_component/PushItem";
import MenuHeader from "@/app/_component/Menu/MenuHeader";


export default function AlarmPage() {
  return (
    <AppContainer>
      <Container>
        <MenuHeader>알림</MenuHeader>
        <Stack mt={34} gap={10}>
          <Text size={16} weight={600} color="#191B1C">알림</Text>
          <PushItem />
        </Stack>
      </Container>
    </AppContainer>
  )
}