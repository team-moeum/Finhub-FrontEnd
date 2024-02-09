"use client"

import style from "./CategoryItemList.module.css";
import cx from 'classnames';
import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { forwardRef, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

const mockList = [
    {name: "주식"},
    {name: "펀드"},
    {name: "ETF"},
    {name: "IRP"},
    {name: "연금"},
    {name: "파생상품"},
    {name: "test1"},
    {name: "test2"},
    {name: "test3"},
    {name: "test4"},
]

type Props = {
    id: string;
    name: string;
    activeItem: string;
    itemChange: (item:string) => void;
}

const CategoryItem = forwardRef<HTMLLabelElement, Props>(({ id, name, activeItem, itemChange }, ref) => {
    return (
        <label ref={ref} className={style.item_label}>
            <input 
                type="radio" 
                id={name} 
                name={id}
                checked={activeItem === name}
                onChange={()=>itemChange(name)}
                className={style.category_radio_input}
            />
            <div className={style.item}>
                    <div className={style.icon_box}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                    </div>
                    <p>{name}</p>
            </div>
        </label>
    )
})

CategoryItem.displayName = "CategoryItem";

export default function CategoryItemList() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("주식");
    
    const itemRefs = useRef<(HTMLLabelElement | null)[]>([]);

    const handleToggle = () => {
        console.log("TOGGLE")
        setIsOpen(isOpen ? false : true)
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const CategoryItemChange = (item: string) => {
        setActiveItem(item);
    }

    const BottomSheetCategoryItemChange = (item: string) => {
        setActiveItem(item);
        setIsOpen(false);
    }
 
    useEffect(() => {
        const activeIndex = mockList.findIndex(item => item.name === activeItem);
        if (itemRefs.current[activeIndex]) {
            itemRefs.current[activeIndex]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
        }
    }, [activeItem])

    return (
        <>
            <div className={style.container}>
                <div className={cx([style.item, style.all])} onClick={handleToggle}>
                    <div className={style.icon_box}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path fill="#50BF50" d="M2.857 0A2.857 2.857 0 0 0 0 2.857v2.857a2.857 2.857 0 0 0 2.857 2.857h2.857a2.857 2.857 0 0 0 2.857-2.857V2.857A2.857 2.857 0 0 0 5.714 0H2.857ZM2.857 11.429A2.857 2.857 0 0 0 0 14.286v2.857A2.857 2.857 0 0 0 2.857 20h2.857a2.857 2.857 0 0 0 2.857-2.857v-2.857a2.857 2.857 0 0 0-2.857-2.857H2.857ZM11.429 2.857A2.857 2.857 0 0 1 14.286 0h2.857A2.857 2.857 0 0 1 20 2.857v2.857a2.857 2.857 0 0 1-2.857 2.857h-2.857a2.857 2.857 0 0 1-2.857-2.857V2.857ZM11.429 14.286a2.857 2.857 0 0 1 2.857-2.857h2.857A2.857 2.857 0 0 1 20 14.286v2.857A2.857 2.857 0 0 1 17.143 20h-2.857a2.857 2.857 0 0 1-2.857-2.857v-2.857Z"/>
                        </svg>
                    </div>
                    <p>전체</p>
                </div>

                {mockList.map((item, i) => (
                    <CategoryItem 
                        id="main_input" 
                        key={i} 
                        name={item.name} 
                        activeItem={activeItem} 
                        itemChange={CategoryItemChange}
                        ref={el => itemRefs.current[i] = el}
                     />    
                ))}
            </div>
            <AnimatePresence>
                {isOpen && 
                    <BottomSheet isOpen={true} onClose={handleClose}>
                        <div className={style.bottom_sheet_content}>
                            {mockList.map((item, i) => (
                                <CategoryItem id="bottom_sheet_input" key={i} name={item.name} activeItem={activeItem} itemChange={BottomSheetCategoryItemChange} />    
                            ))}
                        </div>
                    </BottomSheet>
                }
            </AnimatePresence>
        </>

    )
}