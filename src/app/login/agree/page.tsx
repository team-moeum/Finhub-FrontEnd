import { AgreeScreen } from "./_component/AgreeScreen";

import { AppBar } from "@/components/AppBar";
import { AppContainer } from "@/components/Container";

export default function AgreePage() {
  return (
    <AppContainer>
      <AppBar title="약관동의" />
      <AgreeScreen />
    </AppContainer>
  );
}
