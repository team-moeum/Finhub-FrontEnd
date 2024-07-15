import { AppContainer } from "@/components/Container";
import MainNav from "../_component/Nav/MainNav";
import ColumnPage from "./column/page";
import style from "./FeedPage.module.css"
import { Box } from "@/components/Box";
import QuizScreen from "./quiz/_component/QuizScreen";

export default function FeedPage() {
  return (
    <AppContainer>
      <MainNav color="white"/>
      <Box pb={25}>
        <ColumnPage />
        <div className={style.divider} />
        <QuizScreen />
      </Box>
    </AppContainer>
  )
}
