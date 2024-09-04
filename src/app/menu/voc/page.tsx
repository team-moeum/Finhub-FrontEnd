import { VocScreen } from "./_component/VocScreen";

import { AppBar } from "@/components/AppBar";
import { AppContainer } from "@/components/Container";

export default function VocPage() {
  return (
    <AppContainer>
      <AppBar useLeftBack title="문의하기" />
      <VocScreen />
    </AppContainer>
  );
}
