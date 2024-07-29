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
import { getCategoryIconPath } from "@/app/_constants/categoryIcon";

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
        id={`${item.categoryId}`}
        checked={activeItem.categoryId === item.categoryId}
        onChange={() => itemChange(item)}
        className={style.category_radio_input}
      />
      <div className={style.item}>
        <div className={style.icon_box}>
          <Image 
            src={getCategoryIconPath(item.name, activeItem.categoryId === item.categoryId)}
            width={50}
            height={50}
            alt="category icon"
          />
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

  const { data: categoryList } = useCategory();

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
    if (itemRefs.current[activeItem.categoryId]) {
      itemRefs.current[activeItem.categoryId]?.scrollIntoView({
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
            <Image src='/icons/categoryAll.svg' alt="category all" width={20} height={20} />
          </div>
          <p>전체</p>
        </div>

        {categoryList?.map(item => (
          <CategoryItem
            id="main_input"
            key={item.categoryId}
            item={item}
            activeItem={activeItem}
            itemChange={CategoryItemChange}
            ref={el => itemRefs.current[item.categoryId] = el}
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