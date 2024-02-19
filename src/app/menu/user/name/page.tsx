import style from "./name.module.css";
import MenuHeader from "@/app/_component/Menu/MenuHeader";

export default function NamePage() {
    return (
        <div className={style.container}>
            <MenuHeader>이름 변경</MenuHeader>
            <div className={style.content}>
              <input 
                placeholder="이름을 입력해주세요."
                type="text"
                maxLength={15}
              />
              <p>이름은 <span>4자(한글2자)</span> 이상의 <span>한글, 영문, 숫자</span> 조합으로 사용하실 수 있습니다. (특수문자 제외)</p>
            </div>
        </div>
    )
}