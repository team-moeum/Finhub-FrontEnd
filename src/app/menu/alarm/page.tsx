import MenuHeader from "@/app/_component/Menu/MenuHeader";
import style from "./alarm.module.css";
import PushItem from "./_component/PushItem";


export default function AlarmPage() {
    return (
        <div className={style.container}>
            <MenuHeader>알림</MenuHeader>
            <div className={style.push_box}>
                <div className={style.title}>알림</div>
                <PushItem />
            </div>
        </div>
    )
}