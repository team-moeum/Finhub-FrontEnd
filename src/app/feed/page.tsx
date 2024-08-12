import MainNav from "../_component/Nav/MainNav";
import style from "./FeedPage.module.css";
import ColumnPage from "./column/page";
import QuizScreen from "./quiz/_component/QuizScreen";

import { Box } from "@/components/Box";
import { AppContainer } from "@/components/Container";

export default function FeedPage() {
  return (
    <AppContainer footer>
      <MainNav color="white" />
      <Box pb={25}>
        <ColumnPage />
        <div className={style.divider} />
        <QuizScreen />
      </Box>
    </AppContainer>
  );
}
