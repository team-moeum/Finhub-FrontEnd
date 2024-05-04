"use client"

import style from "./UserTypeItemList.module.css";
import cx from 'classnames';
import Image from "next/image";
import { useRecoilState } from "recoil";
import { AnimatePresence } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

import { UserType } from "@/model/UserType";
import { BottomSheet } from "@/components/BottomSheet/BottomSheet";
import { topicUserType } from "@/states/client/atoms/topicUsertype"


type UserTypeItemProps = {
  id: string;
  name: string;
  imgPath: string;
  activeItem: UserType;
  itemChange: () => void;
}

const UserTypeItem = forwardRef<HTMLLabelElement, UserTypeItemProps>(({ id, name, imgPath, activeItem, itemChange }, ref) => {
  return (
    <label ref={ref} className={style.item_label}>
      <input
        type="radio"
        id={name}
        name={id}
        checked={activeItem.name === name}
        onChange={itemChange}
        className={style.category_radio_input}
      />
      <div className={style.item}>
        <div className={style.icon_box}>
          <Image 
            src={imgPath}
            alt="user type avatar image"
            width={48}
            height={48}
          />
        </div>
        <p>{name}</p>
      </div>
    </label>
  )
})

UserTypeItem.displayName = "UserTypeItem";

type Props = {
  data: UserType[]
}
export default function UserTypeItemList({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useRecoilState(topicUserType);

  const itemRefs = useRef<(HTMLLabelElement | null)[]>([]);

  useEffect(() => {
    console.log(activeItem);
  }, [activeItem])

  const handleToggle = () => {
    setIsOpen(isOpen ? false : true)
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const UserTypeItemChange = (userType: UserType) => {
    setActiveItem(userType);
  }

  const BottomSheetUserTypeItemChange = (userType: UserType) => {
    setActiveItem(userType);
    setIsOpen(false);
  }

  useEffect(() => {
    const activeIndex = data.findIndex(item => item.name === activeItem.name);
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <path fill="#50BF50" d="M2.857 0A2.857 2.857 0 0 0 0 2.857v2.857a2.857 2.857 0 0 0 2.857 2.857h2.857a2.857 2.857 0 0 0 2.857-2.857V2.857A2.857 2.857 0 0 0 5.714 0H2.857ZM2.857 11.429A2.857 2.857 0 0 0 0 14.286v2.857A2.857 2.857 0 0 0 2.857 20h2.857a2.857 2.857 0 0 0 2.857-2.857v-2.857a2.857 2.857 0 0 0-2.857-2.857H2.857ZM11.429 2.857A2.857 2.857 0 0 1 14.286 0h2.857A2.857 2.857 0 0 1 20 2.857v2.857a2.857 2.857 0 0 1-2.857 2.857h-2.857a2.857 2.857 0 0 1-2.857-2.857V2.857ZM11.429 14.286a2.857 2.857 0 0 1 2.857-2.857h2.857A2.857 2.857 0 0 1 20 14.286v2.857A2.857 2.857 0 0 1 17.143 20h-2.857a2.857 2.857 0 0 1-2.857-2.857v-2.857Z" />
            </svg>
          </div>
          <p>전체</p>
        </div>

        {data.map((item, i) => (
          <UserTypeItem
            id="main_input"
            key={item.id}
            name={item.name}
            imgPath={item.img_path}
            activeItem={activeItem}
            itemChange={() => UserTypeItemChange(item)}
            ref={el => itemRefs.current[i] = el}
          />
        ))}
      </div>
      <AnimatePresence>
        {isOpen &&
          <BottomSheet title="직업을 골라주세요!" isOpen={true} onClose={handleClose}>
            <div className={style.bottom_sheet_content}>
              {data.map((item, i) => (
                <UserTypeItem 
                  id="bottom_sheet_input" 
                  key={item.id} 
                  name={item.name}
                  imgPath={item.img_path}
                  activeItem={activeItem} 
                  itemChange={() => BottomSheetUserTypeItemChange(item)} 
                />
              ))}
            </div>
          </BottomSheet>
        }
      </AnimatePresence>
    </>
  )
}