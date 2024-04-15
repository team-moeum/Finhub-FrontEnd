import { Suspense } from "react";
import UpdateNickName from "./_component/UpdateNickName";
import style from "./name.module.css";
import MenuHeader from "@/app/_component/Menu/MenuHeader";
import Loading from "@/app/loading";

export default function NamePage() {
  return (
    <div className={style.container}>
      <MenuHeader>닉네임 변경</MenuHeader>
      <Suspense fallback={<Loading />}>
        <UpdateNickName />
      </Suspense>
    </div>
  )
}