import style from "./theme.module.css";
import MenuHeader from "@/app/_component/Menu/MenuHeader";
import ThemeRadioList from "./_component/ThemeRadioList";

export default function ThemePage() {
    return (
        <div className={style.container}>
            <MenuHeader>테마</MenuHeader>
            <ThemeRadioList />
        </div>
    )
}