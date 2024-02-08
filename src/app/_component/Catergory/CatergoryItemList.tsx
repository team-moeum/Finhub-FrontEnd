"use client"

import style from "./CategoryItemList.module.css";
import cx from 'classnames';

const mockList = [
    {name: "주식"},
    {name: "펀드"},
    {name: "ETF"},
    {name: "IRP"},
    {name: "연금"},
    {name: "파생상품"},
]

type Props = {
    children: string
}

function CategoryItem({children} : Props) {
    return (
        <label>
            <input type="radio" id={children} name="category" className={style.category_radio_input}/>
            <div className={style.item}>
                    <div className={style.icon_box}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                    </div>
                    <p>{children}</p>
            </div>
        </label>
    )
}

export default function CategoryItemList() {
    return (
        <div className={style.container}>
            <div className={cx([style.item, style.all])}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path fill="#50BF50" d="M2.857 0A2.857 2.857 0 0 0 0 2.857v2.857a2.857 2.857 0 0 0 2.857 2.857h2.857a2.857 2.857 0 0 0 2.857-2.857V2.857A2.857 2.857 0 0 0 5.714 0H2.857ZM2.857 11.429A2.857 2.857 0 0 0 0 14.286v2.857A2.857 2.857 0 0 0 2.857 20h2.857a2.857 2.857 0 0 0 2.857-2.857v-2.857a2.857 2.857 0 0 0-2.857-2.857H2.857ZM11.429 2.857A2.857 2.857 0 0 1 14.286 0h2.857A2.857 2.857 0 0 1 20 2.857v2.857a2.857 2.857 0 0 1-2.857 2.857h-2.857a2.857 2.857 0 0 1-2.857-2.857V2.857ZM11.429 14.286a2.857 2.857 0 0 1 2.857-2.857h2.857A2.857 2.857 0 0 1 20 14.286v2.857A2.857 2.857 0 0 1 17.143 20h-2.857a2.857 2.857 0 0 1-2.857-2.857v-2.857Z"/>
                    </svg>
                </div>
                <p>전체</p>
            </div>

            {mockList.map((item, i) => (
                <CategoryItem key={i}>{item.name}</CategoryItem>    
            ))}

        </div>
    )
}