import BackButton from "@/app/_component/Nav/BackButton";
import MainNav from "@/app/_component/Nav/MainNav";

import ListCard from "./_component/ListCard";

import { Box } from "@/components/Box";
import { AppContainer, Container } from "@/components/Container";
import { FlexBox } from "@/components/FlexBox";
import { Text } from "@/components/Text";

export default function ColumnList() {
  return (
    <AppContainer>
      <MainNav color="white" />
      <Container>
        <FlexBox justifyContent="flex-start">
          <BackButton />
          <Text size={18} weight={700} color="#191B1C">
            GPT 컬럼 목록
          </Text>
        </FlexBox>
        <Box mt={15}>
          <ListCard />
        </Box>
      </Container>
    </AppContainer>
  );
}
