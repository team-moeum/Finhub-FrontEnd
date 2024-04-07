"use client";

import style from "./ThemeRadioList.module.css";
import { ReactNode, useState } from "react";

type RadioItemProps = {
  value: number,
  seleted: number,
  onChange: () => void,
  children: ReactNode,
}
const RadioItem = ({value, seleted, onChange, children}: RadioItemProps) => {
  return (
    <label className={style.label}>
        <p>{children}</p>
        <input
          type="radio"
          value={value}
          checked={value === seleted}
          onChange={onChange}
        />
        <div className={style.radio_btn} />
    </label>
  )
}

export default function ThemeRadioList() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className={style.container}>
      <div className={style.radio_box}>
        <RadioItem value={0} seleted={selected} onChange={() => setSelected(0)}>시스템 모드</RadioItem>
        <RadioItem value={1} seleted={selected} onChange={() => setSelected(1)}>라이트 모드</RadioItem>
        <RadioItem value={2} seleted={selected} onChange={() => setSelected(2)}>다크 모드</RadioItem>
      </div>
    </div>
  )
}