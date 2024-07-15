import { Text } from "@/components/Text";
import { Stack } from "@/components/Stack";
import { AppContainer, Container } from "@/components/Container";

import PushItem from "./_component/PushItem";
import { AppBar } from "@/components/AppBar";


export default function AlarmPage() {
  return (
    <AppContainer>
      <AppBar 
        useLeftBack
        title="알림"
      />
      <Container>
        <Stack mt={28} gap={10}>
          <Text size={16} weight={600} color="#191B1C">알림</Text>
          <PushItem />
        </Stack>
      </Container>
    </AppContainer>
  )
}