import { AppContainer } from "@/components/Container";
import MainNav from "../_component/Nav/MainNav";
import ColumnPage from "./column/page";
import style from "./FeedPage.module.css"
import { Box } from "@/components/Box";
import QuizScreen from "./quiz/_component/QuizScreen";

export default function FeedPage() {
  return (
    <AppContainer>
      <Box pb={25}>
        <div className={style.feed_container}>
          <ColumnPage />
          <div className={style.divider} />
          <QuizScreen />
        </div>
      </Box>
      <MainNav />
    </AppContainer>
  )
}
