"use client";

import { useRecoilState } from "recoil";
import { topicUserType } from "@/states/client/atoms/topicUsertype"
import style from "./UserTypeContent.module.css";
import UserTypeItemList from "./UserTypeItemList";

const mockList = [
    {name: "선생님"},
    {name: "직업 이름1"},
    {name: "직업 이름2"},
    {name: "직업 이름3"},
    {name: "직업 이름4"},
    {name: "직업 이름5"},
    {name: "직업 이름6"},
    {name: "직업 이름7"},
    {name: "직업 이름8"},
    {name: "직업 이름9"},
]

export default function UserTypeContent() {
    const [activeType, setActiveType] = useRecoilState(topicUserType);

    const text = `주식회사는 자본단체이므로 자본이 없이는 성립할 수 없다. 자본은 사원인 주주(株主)의 출자이며, 권리와 의무의 단위로서의 주식으로 나누어진다. 따라서 주식에는 자본을 구성하는 분자로서의 금액의 뜻과, 주주의 회사에 대한 권리·의무의 단위인 주주권(株主權)으로서의 뜻이 있다. 주식과 유사한 것에 합명회사나 합자회사의 지분(持分)이 있으나, 주식은 1인이 많이 소유할 수 있는 데 대하여 지분은 각인의 출자분을 각각 하나의 지분으로 하는 점에 양자의 차이가 있다. 일반적으로 주식과 주권(株券)을 혼동하는 일이 많으나, 주권은 주식(주주권)을 표창하는 유가증권이다. 주식을 줄여 '주'라고 하며, 소유자를 '주주'라고 한다.`

    return (
        <div className={style.container}>
            <UserTypeItemList data={mockList} />
            <div className={style.notify_box}>
                <p className={style.active_name}>{activeType}</p>을 위한 설명
            </div>
            <div className={style.content_text}>
                {text}
            </div>
        </div>
    )
}