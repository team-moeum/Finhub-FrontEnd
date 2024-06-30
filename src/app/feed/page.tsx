import { AppContainer } from "@/components/Container";
import MainNav from "../_component/Nav/MainNav";
import ColumnPage from "./column/page";
import style from "./FeedPage.module.css"
import { QuizScreen } from "./quiz/_component/QuizScreen";
import { Box } from "@/components/Box";

export default function FeedPage() {
  return (
    // MainNav에 칼럼페이지 일부가 가려져서 안보이는 문제 ?
    // flex로 이것저것 해봤는데 해결 안됨, 패딩 ?
    // page.module.css 참고 -> 패딩 top
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
