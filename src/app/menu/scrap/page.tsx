import style from "./scrap.module.css";
import MenuHeader from "../../_component/Menu/MenuHeader";
import ScrapContent from "./_component/ScrapContent";


export default function ScrapPage() {
    return (
        <div className={style.container}>
            <MenuHeader>스크랩</MenuHeader>
            <ScrapContent />
        </div>
    )
}