"use client"

import style from "./CategoryItemList.module.css";
import cx from 'classnames';
import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { activeCategory } from "@/states/client/atoms/activeCategory"
import { useCategory } from "@/states/server/queries";
import { Category } from "@/model/Category";

type Props = {
    id: string;
    item: Category;
    activeItem: Category;
    itemChange: (categoryItem: Category) => void;
}

const CategoryItem = forwardRef<HTMLLabelElement, Props>(({ id, item, activeItem, itemChange }, ref) => {
    return (
        <label ref={ref} className={style.item_label}>
            <input 
                type="radio" 
                name={id}
                id={`${item.id}`} 
                checked={activeItem.id === item.id}
                onChange={()=>itemChange(item)}
                className={style.category_radio_input}
            />
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>{item.name}</p>
            </div>
        </label>
    )
})

CategoryItem.displayName = "CategoryItem";

export default function CategoryItemList() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useRecoilState(activeCategory);
    
    const { data:categoryList } = useCategory();

    const itemRefs = useRef<(HTMLLabelElement | null)[]>([]);
    
    const handleToggle = () => {
        setIsOpen(isOpen ? false : true)
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const CategoryItemChange = (item: Category) => {
        setActiveItem(item);
    }

    const BottomSheetCategoryItemChange = (item: Category) => {
        setActiveItem(item);
        setIsOpen(false);
    }
 
    useEffect(() => {
        if (itemRefs.current[activeItem.id]) {
            itemRefs.current[activeItem.id]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
        }
    }, [activeItem])

    return (
        <>
            <div className={style.container}>
                <div className={cx([style.item, style.all])} onClick={handleToggle}>
                    <div className={style.icon_box}>
                        <Image src='/icons/categoryAll.svg' alt="category all" width={20} height={20}/>
                    </div>
                    <p>전체</p>
                </div>

                {categoryList?.map(item => (
                    <CategoryItem 
                        id="main_input"
                        key={item.id} 
                        item={item}
                        activeItem={activeItem} 
                        itemChange={CategoryItemChange}
                        ref={el => itemRefs.current[item.id] = el}
                     />    
                ))}
            </div>
            <AnimatePresence>
                {isOpen && 
                    <BottomSheet title="카테고리 전체 보기" isOpen={true} onClose={handleClose}>
                        <div className={style.bottom_sheet_content}>
                            {categoryList?.map((item, i) => (
                                <CategoryItem 
                                    id="bottom_sheet_input"
                                    item={item}
                                    key={i} 
                                    activeItem={activeItem} 
                                    itemChange={BottomSheetCategoryItemChange} 
                                />    
                            ))}
                        </div>
                    </BottomSheet>
                }
            </AnimatePresence>
        </>

    )
}