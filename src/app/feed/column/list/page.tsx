import MainNav from "@/app/_component/Nav/MainNav";
import ListCard from "./_component/ListCard";
import BackButton from "@/app/_component/Nav/BackButton";
import style from "./ListPage.module.css"

export default function ColumnList() {
    return (
        <>
            <MainNav />
            <div className={style.list_header}>
                <BackButton />
                <h3>GPT 컬럼 목록</h3>
            </div>
            <div className={style.list_body}>
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </div>
        </>
    )
}