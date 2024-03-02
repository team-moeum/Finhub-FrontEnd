import MenuHeader from "@/app/_component/Menu/MenuHeader";
import style from "./userType.module.css";
import SelectUserType from "./_component/SelectUserType";



export default function UserTypePage() {
    return (
        <div className={style.container}>
            <MenuHeader>직업 설정</MenuHeader>
            <div className={style.avatar_box}></div>
            <SelectUserType />
        </div>
    )
}