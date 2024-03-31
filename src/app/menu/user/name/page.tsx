import UpdateNickName from "./_component/UpdateNickName";
import style from "./name.module.css";
import MenuHeader from "@/app/_component/Menu/MenuHeader";

export default function NamePage() {
  return (
    <div className={style.container}>
      <MenuHeader>닉네임 변경</MenuHeader>
      <UpdateNickName />
    </div>
  )
}