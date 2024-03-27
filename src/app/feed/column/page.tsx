import ColumnCard from "./_component/ColumnCard";
import DetailButton from "./_component/DetailButton";
import style from "./ColumnPage.module.css"

export default function ColumnPage() {
    return (
        <div className={style.card_container}>
            <h3>GPT 칼럼</h3>
            <ColumnCard />
            <DetailButton/>
        </div>
    )
}